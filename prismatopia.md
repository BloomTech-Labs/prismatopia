# Prismatopia

Prismatopia is an API stack combining a bunch of super-awesome technologies: Apollo Server, Prisma, OpenID Connect, JWT, Postgres, Docker, AWS and more!

[Prismatopia Home](https://github.com/Lambda-School-Labs/prismatopia)

## Quickstart

1. Install Docker
    - <https://www.docker.com/>
1. Install Yeoman

    ```bash
    yarn global add yo
    ```

1. Install the Yeoman generator for Prismatopia

    ```bash
    yarn global add @lambdaschool/generator-prismatopia
    ```

1. Create your new project

    ```bash
    yo prismatopia
    ```

1. Start Prismatopia locally

    ```bash
    make local-up
    ```

1. Deploy the data model

    ```bash
    make local-prisma-deploy
    ```

1. Get a token for your local Prisma

    ```bash
    make local-prisma-token
    ```

1. Open the Prisma playground
    - <http://localhost:7000>

1. Open the 'HTTP Headers' setting in the GraphQL Platground and set your token, like this:

   ```json
      {
        "Authorization":"Bearer <The token from 'make local-prisma-token'>"
      }
   ```

1.  Run some queries!

## Prisma Development

1. Edit your Prisma data model and seeds:
    - `prisma/prisma-datamodel.graphql`
    - `prisma/seeds.js`
1. Deploy your data model changes
    - `make local-prisma-deploy`
1. Get a Prisma token
    - `make local-prisma-token`
1. Open the Prisma playground
    - <http://localhost:7000>
1. Open the 'HTTP Headers' setting in the GraphQL Platground and set your token, like this:

   ```json
      {
        "Authorization":"Bearer <The token from 'make local-prisma-token'>"
      }
   ```

## Local Prisma Make targets

> `make local-prisma-deploy`

Deploys data model changes to your local Prisma service.

- Prisma will need to be running locally for this to work (e.g. "`make local-up`")

> `make local-prisma-deploy-force`

Prisma will refuse to deploy changes if it can't figure out how to preserve existing data. In those cases, you can use this target to force Prisma to make the changes... or you can just always use this target because you're using fake data anyway, right?

> `make local-prisma-reseed`

Clear out any existing data and will rerun seeding to give you a fresh cut of data.

> `make local-prisma-token`

Generate a token for communicating with your local Prisma API.

- Open the 'HTTP Headers' setting in the GraphQL Platground and set your token, like this:

   ```json
      {
        "Authorization":"Bearer <The token from 'make local-prisma-token'>"
      }
   ```

> `make prisma-generate`

Generates a JavaScript client (with types!) and a GraphQL schema that reflects the Prisma API.

Files are generated here:

- `/apollo/schema/generated/prisma.graphql`
- `/apollo/src/generated/prisma-client`

## Apollo Development

Now that you have your Prisma datamodel setup, you'll need to start working on Apollo. Remember, your clients will _only_ ever connect to Apollo, never to Prisma. Prisma is far too wide-open to expose to external clients (web apps, mobile apps, etc).

### Setting up Okta

Apollo has built-in support for authentication using an OIDC compliant identity provider. This example will focus on using Okta, but Auth0 has also been proven to work.

1. Create a new Okta developer account at <https://developer.okta.com>
1. Note your Okta domain, it will be something like: `https://dev-123456-admin.okta.com/`
1. Set the values for the following environment variables in your `.env` file:
    - APOLLO_TOKEN_ENDPOINT
      - `https://<your okta domain>/oauth2/default/v1/token`
    - APOLLO_JWKS_URI
      - `https://<your okta domain>/oauth2/default/v1/keys`
    - APOLLO_JWT_ISSUER
      - `https://<your okta domain>/oauth2/default`
1. Add a new Native application
    - Enable Authorization Code and Resource Owner Password grant types
    - Set the following environment variabels in your `.env` file:
      - APOLLO_CLIENT_ID
        - The Client ID for your application
      - APOLLO_CLIENT_SECRET
        - The Client Secret for your application
1. Create a test user and save the username and password in your `.env` file:
    - APOLLO_TEST_USERNAME
    - APOLLO_TEST_PASSWORD
1. At this point your should be able to successfully run `make apollo-token`
    - You can use this token in the Apollo playground: <http://localhost:8000>

### Cherry picking from the Prisma API

Your Apollo API (the one your clients _will_ talk to) will end up being be a small subset of your Prisma API. You'll only expose the parts of the Prisma API that your clients need and will leave the rest hidden to the world. This will keep your Apollo API development (and testing) to a minimum.

1. Get Prismatopia running: `make local-up`
1. Run `make prisma-generate` and review the generated GraphQL schema: `apollo/schema/generated/prisma.graphql`. Identify a Prisma API call you want to expose to the world. We'll choose `Query.users` for this example.
1. Edit `apollo/schema/apollo.graphql` and import only that query:

    ```graphql
      # import Query.users from "generated/prisma.graphql"
    ```

1. As soon as you save the Apollo schema, `nodemon` will detect the change and will restart Apollo. Nice, right?
1. Now, you need to create a resolver for this type, which you'll do by creating a resolver function in `apollo/src/resolvers/Query.js`

    ```javascript
      const users = (_parent, args, context) => {
        // Pass this call directly through to Prisma and return the result
        return context.prisma.users(args)
      }
    ```

    Note, this is but a simple example. While you may end up just passing many API calls straight through to Prisma, there will also be many times where your Apollo resolvers will contain business logic for data validation, authorization, etc.

At this point, you can continue to iterate between cherry picking Prisma API types and implementing resolvers. The key to this process is that there is a single shared datamodel between Apollo and Prisma, which makes using the Prisma client seamless.

You should _never_ redefine types that are already defined in Prisma, though you may want to extend them or create new types if your Apollo resovers talk to APIs other than Prisma.

### Local Apollo Make Targets

> `make apollo-build`

Builds the Apollo Docker image

> `make apollo-push`

Builds and pushes the Apollo Docker image to the Docker repository specified by APOLLO_CONTAINER_IMAGE

> `make apollo-token`

Generates a JWT for authenticating to Apollo. Very handy for testing!

## Deploy to AWS

Now the fun part! You have your local Prisma datamodel ready and your Apollo schema and resolvers are working, time to deploy to production!

### Build the AWS infrastructure

Prismatopia uses AWS Cloudformation to build a network and all supporting infrastructure for running your GraphQL backend in AWS. The entire process is scripted using CloudFormation, which makes it repeatable and robust.

The scripts are in the `aws` folder and are divided up in order to minimize bundling too much infrastructure in a single stack.

1. Run `make aws-deploy-app` to deploy all of the application level infrastructure that's shared between different environments.
1. Run `make aws-deploy-env` to deploy all of the environment level infrastructure, including the Postgres database, Prisma service and Apollo service.
1. Now, deploy your Prisma datamodel using `make aws-prisma-deploy`
1. You can now access your services using `apollo.<yourdomain>` and `prisma.<yourdomain>`

## AWS Makefile Targets

## Other Makefile Targets

First, it is very important to note that there is a Makefile in the root directly that is intended to provide all of the controls that you'll need for both local development and AWS operations.

> `make init`

This command will do some cleanup and will try to ensure that all required packages are in place. It's a good command to start with.

> `make docker-clean`

This command will do some cleanup of your Docker environment, which can get messy and cluttered at times.

> `make local-up`

This is a big one! It will use Docker Compose to bring up a local environment with a running Apollo Server, Prisma Server and Postgres Server.

## FAQ

> Why Apollo? Why not just let clients talk to Prisma directly?

Because Prisma has no mechanism for executing your business logic. It exposes every possible CRUD operation to your entire data model without any controls. Apollo allows us to create resolvers so we can write business logic to carefully control CRUD against the Prisma layer. In fact, Apollo will only expose a very small subset of the API that Prisma exposes.

> Why Prisma? Why not just use Apollo to talk to the database?

Because Prisma is a GraphQL based abstraction layer between the Apollo world of GraphQL and the database, which is Postgres in this case, but could also be many other data stores. Using Prisma allows us to work with a single data model from the frontend client to the backend business logic. This makes the whole system very flexible and fast to work with... at least that's what the brochure claims.
