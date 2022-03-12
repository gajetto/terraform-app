# this will create a key with RSA algorithm with 4096 rsa bits
resource "tls_private_key" "private_key" {
  algorithm = "RSA"
  rsa_bits  = 4096
}

# this resource will create a key pair using above private key
resource "aws_key_pair" "key_pair" {
  key_name   = "front-ec2-key"
  public_key = tls_private_key.private_key.public_key_openssh

   depends_on = [tls_private_key.private_key]
}