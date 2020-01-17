# The Prisma Layer

## Configuration

`prisma.yml`
The `prisma.yml` configuration file is used to manage the service, it requires some environment variables to be set:

- PRISMA_ENDPOINT
- PRISMA_SECRET

## The Model

`prisma-datamodel.graphql`
The Prisma data model for building the database

## The Data

`prisma-seed-*.graphql`
Seed files for filling the database with data

## Management API

PRISMA_MANAGEMENT_API_SECRET
This environment variable needs to be set for the Prisma CLI to talk to the Prisma management api

## Insecurity

If the Prisma endpoint is using a self-signed certificate, you need to set a variable when deploying: `export NODE_TLS_REJECT_UNAUTHORIZED=0`
