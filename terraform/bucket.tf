resource "aws_s3_bucket" "b" {
  bucket = var.bucketname
  acl    = "public-read"
  policy = file("policy.json")

  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}
