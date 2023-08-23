resource "aws_route53_zone" "job_post_zone" {
  name         = var.subdomain_name
}

# data "aws_route53_zone" "job_post_zone" { // data for existed resource
#   name         = "bobqin.link"
#   private_zone = false
# }

resource "aws_route53_record" "r53_record" {
  for_each = {
    for dvo in aws_acm_certificate.certificate.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = aws_route53_zone.job_post_zone.zone_id
}

resource "aws_route53_record" "cf_dns" {
  zone_id = aws_route53_zone.job_post_zone.zone_id
  name    = var.subdomain_name
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.cf_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.cf_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}

### Below are register NS from subdomain to domain
### This is important for ACM quick isseued

# Fetch the name servers of the domain hosted zone
data "aws_route53_zone" "domain_zone" {
  name = "bobqin.link"
}

# Update the NS records of the main domain to use the subdomain's name servers
resource "aws_route53_record" "main_domain_ns" {
  zone_id = data.aws_route53_zone.domain_zone.zone_id
  name    = var.subdomain_name
  type    = "NS"
  ttl     = "300"

  records = aws_route53_zone.job_post_zone.name_servers
}
