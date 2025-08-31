# =============================================================================
# ELANSWER AWS INFRASTRUCTURE - MAIN CONFIGURATION
# =============================================================================
# This file defines the core AWS infrastructure for the Elanswer AI automation
# platform, demonstrating enterprise-grade cloud architecture patterns.
# =============================================================================

terraform {
  required_version = ">= 1.5.0"
  
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
    random = {
      source  = "hashicorp/random"
      version = "~> 3.1"
    }
  }

  # Remote state backend for team collaboration
  backend "s3" {
    bucket         = "elanswer-terraform-state"
    key            = "infrastructure/terraform.tfstate"
    region         = "us-east-1"
    encrypt        = true
    dynamodb_table = "elanswer-terraform-locks"
  }
}

# =============================================================================
# PROVIDER CONFIGURATION
# =============================================================================

provider "aws" {
  region = var.aws_region

  default_tags {
    tags = {
      Project     = "Elanswer"
      Environment = var.environment
      ManagedBy   = "Terraform"
      Owner       = "DevOps Team"
      CostCenter  = "Engineering"
    }
  }
}

# =============================================================================
# DATA SOURCES
# =============================================================================

data "aws_caller_identity" "current" {}
data "aws_region" "current" {}

data "aws_availability_zones" "available" {
  state = "available"
}

# =============================================================================
# LOCAL VALUES
# =============================================================================

locals {
  name_prefix = "${var.project_name}-${var.environment}"
  
  common_tags = {
    Project     = var.project_name
    Environment = var.environment
    ManagedBy   = "Terraform"
    Repository  = "elanswer-web"
  }

  # AZ configuration for high availability
  azs = slice(data.aws_availability_zones.available.names, 0, 3)
}

# =============================================================================
# NETWORKING MODULE
# =============================================================================

module "networking" {
  source = "./modules/networking"

  name_prefix = local.name_prefix
  environment = var.environment
  
  # VPC Configuration
  vpc_cidr = var.vpc_cidr
  azs      = local.azs
  
  # Subnet Configuration
  public_subnet_cidrs  = var.public_subnet_cidrs
  private_subnet_cidrs = var.private_subnet_cidrs
  database_subnet_cidrs = var.database_subnet_cidrs
  
  # NAT Gateway Configuration
  enable_nat_gateway = var.enable_nat_gateway
  single_nat_gateway = var.single_nat_gateway
  
  # VPC Flow Logs
  enable_flow_logs = var.enable_flow_logs
  
  tags = local.common_tags
}

# =============================================================================
# SECURITY MODULE
# =============================================================================

module "security" {
  source = "./modules/security"

  name_prefix = local.name_prefix
  environment = var.environment
  vpc_id      = module.networking.vpc_id
  
  # WAF Configuration
  enable_waf = var.enable_waf
  
  # KMS Configuration
  kms_key_deletion_window = var.kms_key_deletion_window
  
  # Secrets Manager
  database_credentials = {
    username = var.db_username
    password = var.db_password
  }
  
  tags = local.common_tags
}

# =============================================================================
# DATABASE MODULE
# =============================================================================

module "database" {
  source = "./modules/database"

  name_prefix = local.name_prefix
  environment = var.environment
  
  # Network Configuration
  vpc_id               = module.networking.vpc_id
  database_subnet_ids  = module.networking.database_subnet_ids
  vpc_security_group_ids = [module.security.database_security_group_id]
  
  # RDS Configuration
  engine_version       = var.db_engine_version
  instance_class       = var.db_instance_class
  allocated_storage    = var.db_allocated_storage
  max_allocated_storage = var.db_max_allocated_storage
  
  # Credentials
  master_username = var.db_username
  master_password = var.db_password
  
  # Backup Configuration
  backup_retention_period = var.db_backup_retention_period
  backup_window          = var.db_backup_window
  maintenance_window     = var.db_maintenance_window
  
  # High Availability
  multi_az               = var.db_multi_az
  create_read_replica    = var.create_db_read_replica
  
  # Monitoring
  monitoring_interval    = var.db_monitoring_interval
  performance_insights_enabled = var.db_performance_insights_enabled
  
  # Encryption
  kms_key_id = module.security.kms_key_id
  
  tags = local.common_tags
}

# =============================================================================
# STORAGE MODULE
# =============================================================================

module "storage" {
  source = "./modules/storage"

  name_prefix = local.name_prefix
  environment = var.environment
  
  # S3 Configuration
  enable_versioning = var.s3_enable_versioning
  enable_encryption = var.s3_enable_encryption
  
  # CloudFront Configuration
  enable_cloudfront = var.enable_cloudfront
  price_class      = var.cloudfront_price_class
  
  # KMS Key for encryption
  kms_key_id = module.security.kms_key_id
  
  tags = local.common_tags
}

# =============================================================================
# COMPUTE MODULE
# =============================================================================

module "compute" {
  source = "./modules/compute"

  name_prefix = local.name_prefix
  environment = var.environment
  
  # Network Configuration
  vpc_id            = module.networking.vpc_id
  public_subnet_ids = module.networking.public_subnet_ids
  private_subnet_ids = module.networking.private_subnet_ids
  
  # Security Groups
  alb_security_group_id = module.security.alb_security_group_id
  ecs_security_group_id = module.security.ecs_security_group_id
  
  # ECS Configuration
  ecs_cluster_name = "${local.name_prefix}-cluster"
  
  # Application Configuration
  app_image = var.app_image
  app_port  = var.app_port
  
  # Auto Scaling
  min_capacity = var.ecs_min_capacity
  max_capacity = var.ecs_max_capacity
  desired_capacity = var.ecs_desired_capacity
  
  # Health Check
  health_check_path = var.health_check_path
  
  # Database Connection
  database_endpoint = module.database.endpoint
  database_name     = module.database.database_name
  
  # Secrets
  database_secret_arn = module.security.database_secret_arn
  
  tags = local.common_tags
}

# =============================================================================
# MONITORING MODULE
# =============================================================================

module "monitoring" {
  source = "./modules/monitoring"

  name_prefix = local.name_prefix
  environment = var.environment
  
  # Resources to monitor
  ecs_cluster_name = module.compute.ecs_cluster_name
  ecs_service_name = module.compute.ecs_service_name
  alb_arn_suffix   = module.compute.alb_arn_suffix
  target_group_arn_suffix = module.compute.target_group_arn_suffix
  
  # Database monitoring
  db_instance_identifier = module.database.db_instance_identifier
  
  # Notification configuration
  notification_email = var.notification_email
  
  tags = local.common_tags
}

# =============================================================================
# CI/CD MODULE
# =============================================================================

module "cicd" {
  source = "./modules/cicd"

  name_prefix = local.name_prefix
  environment = var.environment
  
  # Repository Configuration
  github_repo_owner = var.github_repo_owner
  github_repo_name  = var.github_repo_name
  github_branch     = var.github_branch
  
  # Build Configuration
  build_compute_type = var.build_compute_type
  build_image       = var.build_image
  
  # ECS Configuration
  ecs_cluster_name = module.compute.ecs_cluster_name
  ecs_service_name = module.compute.ecs_service_name
  
  # ECR Repository
  ecr_repository_url = module.compute.ecr_repository_url
  
  tags = local.common_tags
}
