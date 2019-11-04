# Product Management API

A GraphQL API with data model for managing products, projects, people and roles

## Usage

The `prisma.yml` configuration file is used to manage the service, it requires some environment variable to be set:

```shell
# Set the URL of the Prisma endpoint
export PM_API_DEV_ENDPOINT=<The URL to the endpoint>

# Set the secret used to access the endpoint
export PM_API_DEV_SECRET=<The Secret>
```

In order to talk to the GraphQL server management endpoint a secret is required:

```shell
# Set the secret for accessing the management API
PRISMA_MANAGEMENT_API_SECRET=<The Secret>
```

If the endpoint is using a self-signed certificate, you need to set a variable when deploying

```shell
# Tell Prisma client to ignore the certificate
NODE_TLS_REJECT_UNAUTHORIZED=0 prisma deploy

NODE_TLS_REJECT_UNAUTHORIZED=0 prisma playground
```
