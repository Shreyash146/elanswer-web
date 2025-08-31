# =============================================================================
# DEVELOPMENT ENVIRONMENT CONFIGURATION
# =============================================================================
# This file contains environment-specific variables for the development
# environment, optimized for cost and development workflows.
# =============================================================================

# General Configuration
project_name = "elanswer"
environment  = "dev"
aws_region   = "us-east-1"

# Networking Configuration
vpc_cidr                 = "10.0.0.0/16"
public_subnet_cidrs      = ["10.0.1.0/24", "10.0.2.0/24"]
private_subnet_cidrs     = ["10.0.11.0/24", "10.0.12.0/24"]
database_subnet_cidrs    = ["10.0.21.0/24", "10.0.22.0/24"]

# Cost Optimization for Development
enable_nat_gateway = true
single_nat_gateway = true  # Single NAT Gateway to reduce costs
enable_flow_logs   = false # Disable flow logs to reduce costs

# Database Configuration (Development)
db_engine_version    = "15.4"
db_instance_class    = "db.t3.micro"  # Smallest instance for dev
db_allocated_storage = 20
db_max_allocated_storage = 50

# Database credentials (use AWS Secrets Manager in production)
db_username = "elanswer_dev"
# db_password should be set via environment variable or AWS Secrets Manager

# Backup Configuration (Minimal for dev)
db_backup_retention_period = 1  # 1 day retention for dev
db_backup_window          = "03:00-04:00"
db_maintenance_window     = "sun:04:00-sun:05:00"

# High Availability (Disabled for cost savings in dev)
db_multi_az               = false
create_db_read_replica    = false
db_monitoring_interval    = 0  # Disable enhanced monitoring
db_performance_insights_enabled = false

# Compute Configuration
app_image = "nginx:latest"  # Placeholder image
app_port  = 3000

# Auto Scaling (Minimal for dev)
ecs_min_capacity     = 1
ecs_max_capacity     = 3
ecs_desired_capacity = 1

health_check_path = "/health"

# Storage Configuration
s3_enable_versioning = false  # Disable versioning for dev
s3_enable_encryption = true
enable_cloudfront    = false  # Disable CloudFront for dev
cloudfront_price_class = "PriceClass_100"

# Security Configuration
enable_waf = false  # Disable WAF for dev to reduce costs
kms_key_deletion_window = 7

# Monitoring Configuration
notification_email = "dev-team@elanswer.com"

# CI/CD Configuration
github_repo_owner = "Shreyash146"
github_repo_name  = "elanswer-web"
github_branch     = "develop"  # Use develop branch for dev environment

build_compute_type = "BUILD_GENERAL1_SMALL"
build_image       = "aws/codebuild/amazonlinux2-x86_64-standard:5.0"
