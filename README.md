# labby-prisma

![](https://raw.githubusercontent.com/elkhoudh/labby-prisma/master/assets/layer.gif?token=AD6SOTDN3NAOJR663OULI7C5SUW3M)

#####Detailed Explanation On How the GraphQL Labby Stack Works.

##CloudFormation
#####Creates 3 seperate stacks that will create the services needed for our Postgres RDS Instance,Fargate Container and Lambda Function.

##Postgres RDS
#####It is used to store data for our Prisma API.

- Subnet 1: 10.192.12.0/24
- Subnet 2: 10.192.12.0/24
- PORT :5432

##Fargate Container (Primsa GraphQL API)
#####Creates all of our CRUD operation on the given schema.

- VPC: 10.0.0.0/16
- PORT: 80

##Lambda Function (GraphQL Yoga) -
#####Serves data from our Prisma API to the client (needs a apikey to make requests. and on the header add `x-api-key` ).
