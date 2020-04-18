# The Prisma Layer

## Configuration

`prisma.yml`
The `prisma.yml` configuration file is used to manage the service, it requires some environment variables to be set:

- PRISMA_ENDPOINT
- PRISMA_SECRET
- PRISMA_MANAGEMENT_API_SECRET

## The Model

`prisma-datamodel.graphql`
The Prisma data model for building the database

## The Data

`seed.js`
A JS-based seed file for filling the database with test data

## Insecurity

If the Prisma endpoint is using a self-signed certificate, you need to set a variable when deploying: `export NODE_TLS_REJECT_UNAUTHORIZED=0`
