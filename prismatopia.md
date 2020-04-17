# Prismatopia

Prismatopia is an API stack combining a bunch of super-awesome technologies: Apollo Server, Prisma, OpenID Connect, JWT, Postgres, Docker, AWS and more!

[Prismatopia Home](https://github.com/Lambda-School-Labs/prismatopia)

## Local Development Workflow

### Prepare

1. Install Yeoman
     - `npm install -g yo`
2. Install the Yeoman generator for Prismatopia
     - `npm install -g yo`

### Develop your Prisma datamodel

1. Create a `.env` file to feed environment variables to Prismatopia
   - Details [here](#environment-variables)
2. Open a terminal and run "`make local-up`" to start all services locally using Docker Compose
   - Keep this terminal handy so you can see the output from the running services
3. Open a second terminal and run "`make prisma-deploy`" to deploy the initial Prisma data model
4. Run "`make local-prisma-token`" to get a token for the local Prisma API
5. Browse to <https://localhost:7000> to open the local Prisma GraphQL Playground
6. Open the 'HTTP Headers' setting in the GraphQL Platground and set your token, like this:

   ```json
      {
        "Authorization":"Bearer <The token from 'make local-prisma-token'>"
      }
   ```

You can now develop your Prisma datamodel and seed data. Deploy changes using the following make targets:

#### `make local-prisma-deploy`

This target will deploy changes to your data model to your local Prisma service.

#### `make local-prisma-deploy-force`

Sometimes Prisma will refuse to deploy changes if it can't figure out how to preserve existing data. In those cases, you can use this target to force Prisma to make the changes... or you can just always use this target because you're using fake data anyway, right?

#### `make local-prisma-reseed`

This target will clear out any existing data and will rerun seeding to give you a fresh cut of data.

#### `make local-prisma-token`

This target will generate a token for communicating with your local Prisma API.

### Develop your Apollo schema and resolvers

Now that you have your Prisma datamodel setup, you'll need to start working on Apollo. Remember, your clients will _only_ ever connect to Apollo, never to Prisma. Prisma is way too wide-open to expose to external clients (web apps, mobile apps, etc).

#### Cherry picking from the Prisma API

Your Apollo API (the one your clients _will_ talk to) will end up being be a small subset of your Prisma API. You'll only expose the parts of the Prisma API that your clients need and will leave the rest hidden to the world. This will keep your Apollo API development (and testing) to a minimum.

1. Look in the `apollo/schema/generated/prisma.graphql` file and identify a Prisma API call you want to expose to the world (e.g. `Query.users`)
2. Edit the `apollo/schema/apollo.graphql` file and import only that query

    ```graphql
      # import Query.users from "generated/prisma.graphql"
    ```

3. As soon as you do this, `nodemon` will detect the change and will restart Apollo. Nice, right?
4. Now, you need to create a resolver for this type, which you'll do by creating a resolver function in `apollo/src/resolvers/Query.js`

    ```javascript
      const users = (_, args, context) => {
        // Pass this call directly through to Prisma and return the result
        return context.prisma.users(args)
      }
    ```

    Note, this is an over simplified example. While you may end up just passing many API calls straight through to Prisma, there will also be many times where your Apollo resolvers will contain business logic for data validation, authorization, etc.

At this point, you can continue to iterate between cherry picking Prisma API types and implementing resolvers. The key to this process is that there is a single shared datamodel between Apollo and Prisma, which makes using the Prisma client seamless.

You should _never_ redefine types that are already defined in Prisma, though you may want to extend them or create new types if your Apollo resovers talk to APIs other than Prisma.

### Deploying to AWS

Now the fun part! You have your local Prisma datamodel ready and your Apollo schema and resolvers are working, time to deploy to production!

#### Build the AWS infrastructure

Prismatopia uses AWS Cloudformation to build a network and all supporting infrastructure for running your GraphQL backend in AWS. The entire process is scripted using CloudFormation, which makes it repeatable and robust.

The scripts are in the `aws` folder and are divided up in order to minimize bundling too much infrastructure in a single stack.

1. Run `make aws-deploy-app` to deploy all of the application level infrastructure that's shared between different environments.
2. Run `make aws-deploy-env` to deploy all of the environment level infrastructure, including the Postgres database, Prisma service and Apollo service.
3. Now, deploy your Prisma datamodel using `make aws-prisma-deploy`
4. You can now access your services using `apollo.<yourdomain>` and `prisma.<yourdomain>`

You can now keep developing locally and you can use `make aws-prisma-deploy` and `

### Environment Variables

To use Prismatopia locally, you need to have some environment variables in place to give the various parts of the system some context. You'll need to create a `.env` file in the root directory with the following contents:

```text
PRISMA_ENDPOINT=http://localhost:7000

PRISMA_SECRET=<a secret for the prisma service to use: e.g. myfirstpassword>
PRISMA_MANAGEMENT_API_SECRET=<a secret for the prisma service to use: e.g. mybestpassword>

OAUTH_TOKEN_ENDPOINT=<An OAuth endpoint for Apollo to use for validating tokens: e.,g. "https://dev-173777.okta.com/oauth2/default">
OAUTH_CLIENT_ID=<The client id to use with the OAuth endpoint: e.g. "d4t23g3d1dfwd32dQ357">

TEST_OAUTH_CLIENT_ID=<A different client id to use with the OAuth endpoint, but one that accepts client credentials: e.,g. "dfwd4t23g3fwd3d1d3">
TEST_OAUTH_CLIENT_SECRET=<Client secret for the client ID above: e.g. "sldkmai98sdj982jwd8js9dhdalskdnoi9">

APOLLO_CONTAINER_IMAGE=<When you're ready to push your Apollo server to the cloud, this is the name of the image it will have in Docker Hub: e.g. "lambdaschoollabs/prismatopia-apollo:latest">
```

### Makefile

First, it is very important to note that there is a Makefile in the root directly that is intended to provide all of the controls that you'll need for both local development and AWS operations.

#### `make init`

This command will do some cleanup and will try to ensure that all required packages are in place. It's a good command to start with.

#### `make docker-clean`

This command will do some cleanup of your Docker environment, which can get messy and cluttered at times.

#### `make local-up`

This is a big one! It will use Docker Compose to bring up a local environment with a running Apollo Server, Prisma Server and Postgres Server.

#### `make prisma-generate`

Generates a Prisma client and GraphQL model from your Prisma data model for use in your Apollo resolvers.

#### `make local-prisma-deploy`

Deploys your Prisma data model to the locally running Prisma server.

#### `make local-prisma-reseed`

Resets and reseeds data into the locally running Prisma server.

#### `make local-prisma-token`

Grabs a token that you can use in the GraphQL Playground of your locally running Prisma server.

#### `make apollo-build`

Builds a fresh new Docker image from the contents of the `apollo` folder and stores it in your local Docker service.

#### `make apollo-push`

Builds a fresh new Docker image from the contents of the `apollo` folder and pushes it to Docker Hub.

#### `make apollo-token`

Grabs a token, using the `OAUTH_TOKEN_ENDPOINT`, `TEST_OAUTH_CLIENT_ID` and `TEST_OAUTH_CLIENT_SECRET` environment variables. Very handy to use in the Apollo GraphQL Playground.

## Detailed Local Development Workflow

Certainly some steps were skipped earlier, so here are the details to how to work with Prismatopia locally:

### 1) Install tools

* Docker
* Prisma CLI

### 2) Create a domain on Okta

TBDocumented

### 3) Setup your environment variables

Create an `.env` file in the root directory as described above

### Start Prismatopia

`make local-up`

Prisma, Apollo and Postgres should be running now, check the output for the endpoints:

```shell
...
apollo_1    | Running at address :: on port 8000
...
prisma_1    | Server running on :7000
...
```

### Check the web interfaces

You should now be able to hit Prisma in the browser:

* Prisma GraphQL Playground: <http://localhost:7000/>
* Prisma Admin: <http://localhost:7000/_admin>

You should also be able to hit Apollo in the browser:

* Apollo GraphQL Playground: <http://localhost:8000/>

Sweet! Now, you need to deploy something to Prisma, which starts out empty.

### Deploy data model to Prisma

`make local-prisma-deploy`

### Play with Prisma

1. Generate a token: `make local-prisma-deploy`
2. Open the Prisma Admin: <http://localhost:7000/_admin>
3. Add the token (TBD)
4. See the data
5. Open the Prisma GraphQL Playground: <http://localhost:7000/>
6. Add the token (TBD)
7. See the data

Hooray! Your Prisma service is talking to Postgres!

### Play with Apollo

1. Generate a token: `make apollo-token`
2. Open the Apollo GraphQL Playground: <http://localhost:8000/>
3. Add the token (TBD)
4. See the data

Hooray! Your Apollo service is talking to Prisma which is talking to Postgres!

### Develop the Prisma data model

It's unlikely that the out of the box Prismatopia data model is what your data looks like. So you'll need to edit `prisma/prisma-datamodel.graphql` to create a data model that suits you. (TODO: Add link to Prisma docs)

As you're messing with the Prisma data model, you'll want to see it working. You can use `make local-prisma-deploy` and `make local-prisma-reseed` to keep changes flowing in to your local Prisma server. Use the Admin and Playground apps to verify your changes.

### Write your resolvers

Once you have your Prisma data model tooled out. You'll want to go up a layer and start writing Apollo resolvers to expose your data model to your clients.

#### Why Apollo? Why not just let clients talk to Prisma directly?

Because Prisma has no mechanism for executing your business logic. It exposes every possible CRUD operation to your entire data model without any controls. Apollo allows us to create resolvers so we can write business logic to carefully control CRUD against the Prisma layer. In fact, Apollo will only expose a very small subset of the API that Prisma exposes.

#### Why Prisma? Why not just use Apollo to talk to the database?

Because Prisma is a GraphQL based abstraction layer between the Apollo world of GraphQL and the database, which is Postgres in this case, but could also be many other data stores. Using Prisma allows us to work with a single data model from the frontend client to the backend business logic. This makes the whole system very flexible and fast to work with... at least that's what the brochure claims.

#### Writing resolvers

Resolvers are housed in the `apollo/src/resolvers` folder. You'll write all your resolver code there and they'll be passed to Apollo when the server starts.

Your resolvers are, of course, based on a data model. This is where Prisma and Apollo work together to make life easier.

Look in your Prisma data model. You might have a couple of types that look like this...

```graphql
type User {
  id: ID! @id
  profile: Profile
}

type Profile {
  id: ID! @id
  favorite_color: String
  favorite_shape: String
}
```

Now look in your `apollo/schema/generated` folder where you'll see a `prisma.graphql` file. This file is generated using: `make prisma-generate`

The `prisma.graphql` file is an entire GraphQL model full of types, queries and mutations that Prisma created based on your Prisma data model. This is super useful, because we can cherry-pick parts of this data model to use for our Apollo data model. This means we only have to write our data model once and Prisma takes care of the rest!

Remember, our clients will always talk to Apollo, never to Prisma directly, so this is where we choose what parts of our Prisma data model to expose.

Say we want to just let our Apollo clients run a couple queries: one for all users and another for a specific user.

This is really easy to do by creating a schema file for Apollo and importing only what we need from the Prisma generated schema, like this:

`apollo/schema/schema.graphql`

```graphql
# import Query.user from "generated/prisma.graphql"
# import Query.users from "generated/prisma.graphql"
```

This "import" syntax is supported by a tool called [graphql-import](https://oss.prisma.io/content/graphql-import/overview) which we'll use in our code. Very handy!

Now, Apollo will use the 2 queries we've imported and any of the supporting types as our data model. To Apollo, our datamodel now looks like this:

```text
type Query {
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
}

type User {
  id: ID!
  profile: Profile
}
```

But with lots more ancillary data types that we don't have to write!

Now, we can write our resolvers based on the datamodel we wrote for Prisma, which is reflected in the database _and_ a nice little client library that was also generated by Prisma. This library can be found in `apollo/src/generated/prisma-client`. We'll use this library in our resolvers to talk to Prisma, all using the same data model and types we've been using all along.

Let's write the resolver for the `user` query:

`User.js`

```javascript
// @ts-check

/**
 * @param {{ where: import('../generated/prisma-client').UserWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
const user = async (_, args, context) => {
  const user = await context.prisma.user(args.where);

  return user;
};
```

Let's walk through this:

Tell our IDE to check types... because types!

```javascript
// @ts-check
```

We can use the types generated in the Prisma client to help our IDE with autocomplete... because types!

```javascript
/**
 * @param {{ where: import('../generated/prisma-client').UserWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
```

Now the fun part, we can very easily pass this request through to the underlying Prisma service, using the Prisma client that was generated

```javascript
const user = async (_, args, context) => {
  const user = await context.prisma.user(args.where);

  return user;
};
```

Because the types are shared between Prisma and Apollo, it's really easy to talk between the layers.

Now, of course, our resolvers will not be this simple. We'll have lots of business logic floating around. But when we need to get data, we can easily retrieve the data from Prisma and in turn from our database, without ever leaving our data model.

```javascript
const user = async (_, args, context) => {
  ...Business Logic

  const user = await context.prisma.user(args.where);

  ...Business Logic
  ...More Business Logic

  return user;
};
```

If you're playing along at home, you may notice that Apollo updates whenever you save your resolvers. That's because Apollo is running with Nodemon, so your development experience can be fast and seamless.


## Operating in AWS

Now that you've developed your GraphQL API locally, you're ready to push to AWS and run this thing in production. Prismatopia has you covered there as well.

TBDocumented

## More Details

The various components of this stack are organized into folders to help keep everything neat and tidy.

`docker-compose.yml`
A Docker Compose file that brings Prismatopia up locally for you to play with and develop against. Use it by running `make local-up`

`.gitignore`
Very important to ensuing that you don't accidentally commit `.env` into your repository!

`Makefile`
Oh how do we love the Makefile! So handy! Anything you need to do with Prismatopia can be done from the make file...

Directories:

* [The Apollo Layer](apollo/README.md)
* [The Prisma Layer](prisma/README.md)
* [The AWS Layer](cloudformation/README.md)
