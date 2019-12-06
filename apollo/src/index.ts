/**
 * Launches Apollo Server using Express.
 *
 * Note: Graphql Playground is disabled as this is meant to be strictly an API server.
 *
 * @author Bernie Durfee
 * @license MIT
 */
import cors from "cors";
import path from "path";

import * as auth from "./auth";

// We'll be running Apollo using Express
import express from "express";

// This is the Apollo server we'll run
import { ApolloServer } from "apollo-server-express";

// We're going to throw this if the caller is not authenticated
import { AuthenticationError } from "apollo-server";

// This is the Prisma client generated from our datamodel
import { Prisma, prisma, Int } from "./generated/prisma-client";

// This is used to enable schema importing from a Graphql file
import { importSchema } from "graphql-import";

// Our resolvers for handling requests
import { resolvers } from "./resolvers";

// Make sure we're ready to start!
import validateEnv from "valid-env";
validateEnv(["APOLLO_LISTEN_PORT", "PRISMA_ENDPOINT", "PRISMA_SECRET"]);

// The Client ID and Secret for obtaining an Access Token

// The route and port Apollo will listen on
const graphqlPath: string = "/api/graphql";
const graphqlPort: string = process.env.APOLLO_LISTEN_PORT;

// Create our express app to run Apollo
const app = express();

// Enable CORS for all requests
app.use(cors());

// Pull in the schema that Apollo will use
const schema = path.resolve("src/schema/schema.graphql");
console.log(importSchema(schema));
const typeDefs = importSchema(schema);

// The interface for the context object to be passed to resolvers
export interface Context {
  prisma: Prisma;
  user: any;
}

// Create our Apollo Server
const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  introspection: false,
  playground: false,
  context: async ({ req }) => {
    // Nothing gets through without a valid OAuth 2.0 Bearer token
    const token = req.headers.authorization || "";
    console.log("Incoming Access Token:", token);
    if (!token)
      throw new AuthenticationError(
        "This service requires a valid OAuth 2.0 Bearer token to be included in the Authorization header"
      );

    // const userId = await auth.getUserIdFromToken(token);
    // console.log("Incoming user id:", userId);
    // if (!userId)
    //   throw new AuthenticationError("Could not get user id from token");

    // // try to retrieve a user with the token
    // const user = await auth.default(userId);
    // if (!user)
    //   throw new AuthenticationError(
    //     "Could not get user from user id: " + userId
    //   );
    // console.log("Incoming user:", user);

    // // optionally block the user
    // // we could also check user roles/permissions here
    // if (!user) throw new AuthenticationError("you must be logged in");

    return {
      prisma: prisma
      // user: user
    };
  },
  formatError: error => {
    console.log(error);
    return error;
  },
  formatResponse: response => {
    console.log(response);
    return response;
  }
}) as any;

// Create a router to handle all routes going to Apollo
const ProtectedRoutes = express.Router();

// Tell our router to always check for a valid JWT from our IdP
ProtectedRoutes.use(async (req, res, next) => {
  // The bearer token needs to come in on a header called 'authorization' (Always lowercase)
  var bearerToken = req.headers["authorization"];

  if (typeof bearerToken !== "string") {
    res
      .status(401)
      .send(
        "API requires one and only one valid OAuth 2.0 bearer token passed in the 'authorization' header"
      );

      next(new Error("401"));
  }
  else {
    console.log("Verifying Bearer Token:", bearerToken)

    var accessTokenValid = await auth.verifyAccessToken(bearerToken)
    if (!accessTokenValid) {
      res.send(401);

      next(new Error("401"));
    } else {
      next();
    }
  }
});

app.use("/api", ProtectedRoutes);

// Fire up Express
app.listen({ port: graphqlPort }, () => {
  console.log("Server rocking on PORT", graphqlPort);
});
