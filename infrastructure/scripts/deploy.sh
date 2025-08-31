#!/bin/bash

# =============================================================================
# ELANSWER INFRASTRUCTURE DEPLOYMENT SCRIPT
# =============================================================================
# This script automates the deployment of Elanswer infrastructure across
# different environments with proper validation and error handling.
# =============================================================================

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TERRAFORM_DIR="$(dirname "$SCRIPT_DIR")/terraform"
ENVIRONMENTS_DIR="$TERRAFORM_DIR/environments"

# Functions
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

show_usage() {
    echo "Usage: $0 <environment> [action]"
    echo ""
    echo "Environments:"
    echo "  dev      - Development environment"
    echo "  staging  - Staging environment"
    echo "  prod     - Production environment"
    echo ""
    echo "Actions:"
    echo "  plan     - Show what will be created/changed (default)"
    echo "  apply    - Apply the infrastructure changes"
    echo "  destroy  - Destroy the infrastructure"
    echo "  validate - Validate Terraform configuration"
    echo "  init     - Initialize Terraform"
    echo ""
    echo "Examples:"
    echo "  $0 dev plan"
    echo "  $0 prod apply"
    echo "  $0 staging destroy"
}

validate_environment() {
    local env=$1
    if [[ ! "$env" =~ ^(dev|staging|prod)$ ]]; then
        log_error "Invalid environment: $env"
        show_usage
        exit 1
    fi
}

validate_action() {
    local action=$1
    if [[ ! "$action" =~ ^(plan|apply|destroy|validate|init)$ ]]; then
        log_error "Invalid action: $action"
        show_usage
        exit 1
    fi
}

check_prerequisites() {
    log_info "Checking prerequisites..."
    
    # Check if Terraform is installed
    if ! command -v terraform &> /dev/null; then
        log_error "Terraform is not installed. Please install Terraform >= 1.5.0"
        exit 1
    fi
    
    # Check Terraform version
    local tf_version=$(terraform version -json | jq -r '.terraform_version')
    log_info "Terraform version: $tf_version"
    
    # Check if AWS CLI is installed
    if ! command -v aws &> /dev/null; then
        log_error "AWS CLI is not installed. Please install AWS CLI"
        exit 1
    fi
    
    # Check AWS credentials
    if ! aws sts get-caller-identity &> /dev/null; then
        log_error "AWS credentials not configured. Please run 'aws configure'"
        exit 1
    fi
    
    local aws_account=$(aws sts get-caller-identity --query Account --output text)
    local aws_region=$(aws configure get region)
    log_info "AWS Account: $aws_account"
    log_info "AWS Region: $aws_region"
}

setup_backend() {
    local env=$1
    log_info "Setting up Terraform backend for $env environment..."
    
    # Create S3 bucket for state if it doesn't exist
    local bucket_name="elanswer-terraform-state-$env"
    if ! aws s3 ls "s3://$bucket_name" &> /dev/null; then
        log_info "Creating S3 bucket: $bucket_name"
        aws s3 mb "s3://$bucket_name"
        
        # Enable versioning
        aws s3api put-bucket-versioning \
            --bucket "$bucket_name" \
            --versioning-configuration Status=Enabled
        
        # Enable encryption
        aws s3api put-bucket-encryption \
            --bucket "$bucket_name" \
            --server-side-encryption-configuration '{
                "Rules": [{
                    "ApplyServerSideEncryptionByDefault": {
                        "SSEAlgorithm": "AES256"
                    }
                }]
            }'
    fi
    
    # Create DynamoDB table for state locking if it doesn't exist
    local table_name="elanswer-terraform-locks-$env"
    if ! aws dynamodb describe-table --table-name "$table_name" &> /dev/null; then
        log_info "Creating DynamoDB table: $table_name"
        aws dynamodb create-table \
            --table-name "$table_name" \
            --attribute-definitions AttributeName=LockID,AttributeType=S \
            --key-schema AttributeName=LockID,KeyType=HASH \
            --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5
        
        # Wait for table to be active
        aws dynamodb wait table-exists --table-name "$table_name"
    fi
}

terraform_init() {
    local env=$1
    local env_dir="$ENVIRONMENTS_DIR/$env"
    
    log_info "Initializing Terraform for $env environment..."
    
    cd "$env_dir"
    
    # Create backend configuration
    cat > backend.tf << EOF
terraform {
  backend "s3" {
    bucket         = "elanswer-terraform-state-$env"
    key            = "infrastructure/terraform.tfstate"
    region         = "us-east-1"
    encrypt        = true
    dynamodb_table = "elanswer-terraform-locks-$env"
  }
}
EOF
    
    # Copy main Terraform files
    cp "$TERRAFORM_DIR/main.tf" .
    cp "$TERRAFORM_DIR/variables.tf" .
    cp "$TERRAFORM_DIR/outputs.tf" .
    
    # Create symbolic links to modules
    if [ ! -L "modules" ]; then
        ln -sf "$TERRAFORM_DIR/modules" modules
    fi
    
    terraform init
}

terraform_validate() {
    local env=$1
    local env_dir="$ENVIRONMENTS_DIR/$env"
    
    log_info "Validating Terraform configuration for $env environment..."
    
    cd "$env_dir"
    terraform validate
    terraform fmt -check=true
}

terraform_plan() {
    local env=$1
    local env_dir="$ENVIRONMENTS_DIR/$env"
    
    log_info "Planning Terraform changes for $env environment..."
    
    cd "$env_dir"
    terraform plan -var-file="terraform.tfvars" -out="tfplan"
}

terraform_apply() {
    local env=$1
    local env_dir="$ENVIRONMENTS_DIR/$env"
    
    log_warning "This will apply changes to the $env environment!"
    read -p "Are you sure you want to continue? (yes/no): " confirm
    
    if [ "$confirm" != "yes" ]; then
        log_info "Deployment cancelled."
        exit 0
    fi
    
    log_info "Applying Terraform changes for $env environment..."
    
    cd "$env_dir"
    terraform apply "tfplan"
    
    log_success "Infrastructure deployment completed for $env environment!"
    
    # Show outputs
    log_info "Infrastructure outputs:"
    terraform output
}

terraform_destroy() {
    local env=$1
    local env_dir="$ENVIRONMENTS_DIR/$env"
    
    log_warning "This will DESTROY all infrastructure in the $env environment!"
    log_warning "This action cannot be undone!"
    read -p "Type 'destroy' to confirm: " confirm
    
    if [ "$confirm" != "destroy" ]; then
        log_info "Destruction cancelled."
        exit 0
    fi
    
    log_info "Destroying Terraform infrastructure for $env environment..."
    
    cd "$env_dir"
    terraform destroy -var-file="terraform.tfvars" -auto-approve
    
    log_success "Infrastructure destroyed for $env environment!"
}

# Main script
main() {
    local environment=${1:-}
    local action=${2:-plan}
    
    if [ -z "$environment" ]; then
        log_error "Environment is required"
        show_usage
        exit 1
    fi
    
    validate_environment "$environment"
    validate_action "$action"
    
    log_info "Starting deployment for environment: $environment, action: $action"
    
    check_prerequisites
    setup_backend "$environment"
    
    case "$action" in
        init)
            terraform_init "$environment"
            ;;
        validate)
            terraform_init "$environment"
            terraform_validate "$environment"
            ;;
        plan)
            terraform_init "$environment"
            terraform_validate "$environment"
            terraform_plan "$environment"
            ;;
        apply)
            terraform_init "$environment"
            terraform_validate "$environment"
            terraform_plan "$environment"
            terraform_apply "$environment"
            ;;
        destroy)
            terraform_init "$environment"
            terraform_destroy "$environment"
            ;;
    esac
    
    log_success "Operation completed successfully!"
}

# Run main function with all arguments
main "$@"
