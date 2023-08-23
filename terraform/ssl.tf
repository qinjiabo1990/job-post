provider "aws" {
  alias  = "us1"
  region = "us-east-1"
}

resource "aws_acm_certificate" "certificate" {
  domain_name       = var.subdomain_name
  validation_method = "DNS"

  provider = aws.us1
}
