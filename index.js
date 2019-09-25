const { GraphQLServerLambda, GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client");
const Mutation = require("./resolvers/Mutation");
const Query = require("./resolvers/Query");

const lambda = new GraphQLServerLambda({
  typeDefs: "schema.graphql",
  resolvers: {
    Mutation,
    Query
  },
  resolverValidationOptions: {
    requireResolversForResolveType: false
  },
  context: req => ({
    ...req,
    prisma
  })
});
exports.server = lambda.graphqlHandler;
exports.playground = lambda.playgroundHandler;
<<<<<<< HEAD

=======
// const server = new GraphQLServer({
//   typeDefs: "schema.graphql",
//   resolvers: {
//     Mutation,
//     Query
//   },
//   resolverValidationOptions: {
//     requireResolversForResolveType: false
//   },
//   context: req => ({
//     ...req,
//     prisma
//   })
// });
>>>>>>> f9497079b2998a0b4f13ffb29a8c769db8e01f6e
// server.start(
//   {
//     cors: {
//       credentials: true,
//       origin: "http://localhost:3000"
//     }
//   },
//   details => {
//     console.log(`server running on ${details.port}`);
//   }
// );
