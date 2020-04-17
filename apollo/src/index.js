// @ts-check
'use strict'

// Apollo dependencies
const { importSchema } = require('graphql-import')
const { ApolloServer, gql } = require('apollo-server')

const PORT = process.env.PORT || 8000

const checkEnvironment = () => {
  const requiredEnvironmentVariables = ['JWT_ISSUER', 'JWKS_URI', 'PRISMA_ENDPOINT', 'PRISMA_SECRET']

  let environmentReady = true
  for (const variableName of requiredEnvironmentVariables) {
    if (!(variableName in process.env)) {
      console.error('Server cannot be started without environment variable %s', variableName)
      environmentReady = false
    }
  }

  if (!environmentReady) {
    throw new Error('Missing one or more required environment variables')
  }
}

const resolvers = require('./resolvers')
const context = require('./context')

const typeDefs = gql(importSchema('schema/apollo.graphql'));

(async () => {
  // Check the environment
  checkEnvironment()

  const server = new ApolloServer({
    resolvers,
    typeDefs,
    context,
    cors: true,
    formatError: err => {
      // Don't give the specific errors to the client.
      console.log('%O', err)
      console.log('%O', err.extensions)

      // Otherwise return the original error.  The error can also
      // be manipulated in other ways, so long as it's returned.
      return err
    }
  })

  const { url } = await server.listen(PORT)
  // eslint-disable-next-line no-console
  console.log(`=========Running on ${url}=========`)
})()
