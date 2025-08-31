# =============================================================================
# ELANSWER AWS INFRASTRUCTURE - OUTPUTS
# =============================================================================
# This file defines all output values from the Elanswer infrastructure,
# providing essential information for application deployment and monitoring.
# =============================================================================

# =============================================================================
# GENERAL OUTPUTS
# =============================================================================

output "account_id" {
  description = "AWS Account ID"
  value       = data.aws_caller_identity.current.account_id
}

output "region" {
  description = "AWS Region"
  value       = data.aws_region.current.name
}

output "environment" {
  description = "Environment name"
  value       = var.environment
}

# =============================================================================
# NETWORKING OUTPUTS
# =============================================================================

output "vpc_id" {
  description = "ID of the VPC"
  value       = module.networking.vpc_id
}

output "vpc_cidr_block" {
  description = "CIDR block of the VPC"
  value       = module.networking.vpc_cidr_block
}

output "public_subnet_ids" {
  description = "IDs of the public subnets"
  value       = module.networking.public_subnet_ids
}

output "private_subnet_ids" {
  description = "IDs of the private subnets"
  value       = module.networking.private_subnet_ids
}

output "database_subnet_ids" {
  description = "IDs of the database subnets"
  value       = module.networking.database_subnet_ids
}

output "internet_gateway_id" {
  description = "ID of the Internet Gateway"
  value       = module.networking.internet_gateway_id
}

output "nat_gateway_ids" {
  description = "IDs of the NAT Gateways"
  value       = module.networking.nat_gateway_ids
}

# =============================================================================
# SECURITY OUTPUTS
# =============================================================================

output "kms_key_id" {
  description = "ID of the KMS key"
  value       = module.security.kms_key_id
}

output "kms_key_arn" {
  description = "ARN of the KMS key"
  value       = module.security.kms_key_arn
}

output "database_secret_arn" {
  description = "ARN of the database secret"
  value       = module.security.database_secret_arn
  sensitive   = true
}

output "waf_web_acl_arn" {
  description = "ARN of the WAF Web ACL"
  value       = module.security.waf_web_acl_arn
}

# =============================================================================
# DATABASE OUTPUTS
# =============================================================================

output "database_endpoint" {
  description = "RDS instance endpoint"
  value       = module.database.endpoint
  sensitive   = true
}

output "database_port" {
  description = "RDS instance port"
  value       = module.database.port
}

output "database_name" {
  description = "Database name"
  value       = module.database.database_name
}

output "database_instance_identifier" {
  description = "RDS instance identifier"
  value       = module.database.db_instance_identifier
}

output "database_read_replica_endpoint" {
  description = "RDS read replica endpoint"
  value       = module.database.read_replica_endpoint
  sensitive   = true
}

# =============================================================================
# STORAGE OUTPUTS
# =============================================================================

output "s3_bucket_name" {
  description = "Name of the S3 bucket"
  value       = module.storage.s3_bucket_name
}

output "s3_bucket_arn" {
  description = "ARN of the S3 bucket"
  value       = module.storage.s3_bucket_arn
}

output "s3_bucket_domain_name" {
  description = "Domain name of the S3 bucket"
  value       = module.storage.s3_bucket_domain_name
}

output "cloudfront_distribution_id" {
  description = "ID of the CloudFront distribution"
  value       = module.storage.cloudfront_distribution_id
}

output "cloudfront_distribution_domain_name" {
  description = "Domain name of the CloudFront distribution"
  value       = module.storage.cloudfront_distribution_domain_name
}

output "cloudfront_distribution_arn" {
  description = "ARN of the CloudFront distribution"
  value       = module.storage.cloudfront_distribution_arn
}

# =============================================================================
# COMPUTE OUTPUTS
# =============================================================================

output "ecs_cluster_name" {
  description = "Name of the ECS cluster"
  value       = module.compute.ecs_cluster_name
}

output "ecs_cluster_arn" {
  description = "ARN of the ECS cluster"
  value       = module.compute.ecs_cluster_arn
}

output "ecs_service_name" {
  description = "Name of the ECS service"
  value       = module.compute.ecs_service_name
}

output "ecs_service_arn" {
  description = "ARN of the ECS service"
  value       = module.compute.ecs_service_arn
}

output "alb_dns_name" {
  description = "DNS name of the Application Load Balancer"
  value       = module.compute.alb_dns_name
}

output "alb_zone_id" {
  description = "Zone ID of the Application Load Balancer"
  value       = module.compute.alb_zone_id
}

output "alb_arn" {
  description = "ARN of the Application Load Balancer"
  value       = module.compute.alb_arn
}

output "ecr_repository_url" {
  description = "URL of the ECR repository"
  value       = module.compute.ecr_repository_url
}

output "ecr_repository_arn" {
  description = "ARN of the ECR repository"
  value       = module.compute.ecr_repository_arn
}

# =============================================================================
# MONITORING OUTPUTS
# =============================================================================

output "cloudwatch_dashboard_url" {
  description = "URL of the CloudWatch dashboard"
  value       = module.monitoring.dashboard_url
}

output "sns_topic_arn" {
  description = "ARN of the SNS topic for notifications"
  value       = module.monitoring.sns_topic_arn
}

# =============================================================================
# CI/CD OUTPUTS
# =============================================================================

output "codepipeline_name" {
  description = "Name of the CodePipeline"
  value       = module.cicd.codepipeline_name
}

output "codepipeline_arn" {
  description = "ARN of the CodePipeline"
  value       = module.cicd.codepipeline_arn
}

output "codebuild_project_name" {
  description = "Name of the CodeBuild project"
  value       = module.cicd.codebuild_project_name
}

output "codebuild_project_arn" {
  description = "ARN of the CodeBuild project"
  value       = module.cicd.codebuild_project_arn
}

# =============================================================================
# SUMMARY OUTPUT
# =============================================================================

output "infrastructure_summary" {
  description = "Summary of deployed infrastructure"
  value = {
    environment = var.environment
    region      = data.aws_region.current.name
    vpc_id      = module.networking.vpc_id
    
    # Application endpoints
    load_balancer_dns = module.compute.alb_dns_name
    cloudfront_domain = module.storage.cloudfront_distribution_domain_name
    
    # Database
    database_endpoint = module.database.endpoint
    
    # Monitoring
    dashboard_url = module.monitoring.dashboard_url
    
    # CI/CD
    pipeline_name = module.cicd.codepipeline_name
  }
  sensitive = true
}
