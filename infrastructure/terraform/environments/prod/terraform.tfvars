# =============================================================================
# PRODUCTION ENVIRONMENT CONFIGURATION
# =============================================================================
# This file contains environment-specific variables for the production
# environment, optimized for high availability, security, and performance.
# =============================================================================

# General Configuration
project_name = "elanswer"
environment  = "prod"
aws_region   = "us-east-1"

# Networking Configuration
vpc_cidr                 = "10.1.0.0/16"
public_subnet_cidrs      = ["10.1.1.0/24", "10.1.2.0/24", "10.1.3.0/24"]
private_subnet_cidrs     = ["10.1.11.0/24", "10.1.12.0/24", "10.1.13.0/24"]
database_subnet_cidrs    = ["10.1.21.0/24", "10.1.22.0/24", "10.1.23.0/24"]

# High Availability Networking
enable_nat_gateway = true
single_nat_gateway = false  # Multiple NAT Gateways for HA
enable_flow_logs   = true   # Enable flow logs for security

# Database Configuration (Production)
db_engine_version    = "15.4"
db_instance_class    = "db.r6g.large"  # Production-grade instance
db_allocated_storage = 100
db_max_allocated_storage = 1000

# Database credentials (use AWS Secrets Manager)
db_username = "elanswer_prod"
# db_password should be set via AWS Secrets Manager

# Backup Configuration (Production)
db_backup_retention_period = 30  # 30 days retention
db_backup_window          = "03:00-04:00"
db_maintenance_window     = "sun:04:00-sun:05:00"

# High Availability (Enabled for production)
db_multi_az               = true
create_db_read_replica    = true
db_monitoring_interval    = 60  # Enhanced monitoring
db_performance_insights_enabled = true

# Compute Configuration
app_image = "your-account.dkr.ecr.us-east-1.amazonaws.com/elanswer:latest"
app_port  = 3000

# Auto Scaling (Production)
ecs_min_capacity     = 2
ecs_max_capacity     = 20
ecs_desired_capacity = 4

health_check_path = "/health"

# Storage Configuration
s3_enable_versioning = true   # Enable versioning for production
s3_enable_encryption = true
enable_cloudfront    = true   # Enable CloudFront for global distribution
cloudfront_price_class = "PriceClass_All"

# Security Configuration
enable_waf = true  # Enable WAF for production security
kms_key_deletion_window = 30

# Monitoring Configuration
notification_email = "ops-team@elanswer.com"

# CI/CD Configuration
github_repo_owner = "Shreyash146"
github_repo_name  = "elanswer-web"
github_branch     = "main"  # Use main branch for production

build_compute_type = "BUILD_GENERAL1_MEDIUM"
build_image       = "aws/codebuild/amazonlinux2-x86_64-standard:5.0"
