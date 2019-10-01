# Overview
This folder contains the templates used to build the supporting infrastructure for the API. The API live in AWS, thus all of the templates are AWS specific. This infrastructure is always changing and improving, though is kept minimal to reduce complexity and cost.

# VPC
A small-ish VPC for the network traffic

# GraphQL Subnet
A private subnet to host the GraphQL services. Small to allow more subnets in other AZs.

# RDS Subnet
A private subnet to host the RDS instances. Small to allow more subnets in other AZs.

# Postgres database
A single Postgres RDS instance to hold the data.

# NAT Gateway
For the RDS instances to reach out to the internet.

# API Gateway
For inbound API requests.

# Other stuff
This infrastructure is foundational, the moving parts (Prisma and GraphQL Yoga) are deployed later using the Serverless Framework)
