import * as path from "path";
import express = require("express");
import { AddressInfo } from "net";
import { importSchema } from "graphql-import";
import { ApolloServer, AuthenticationError } from "apollo-server-express";
import cors from "cors";

import { Prisma } from "./generated/prisma-client";
import { prisma } from "./generated/prisma-client";

import { resolvers } from "./resolvers/Query";

// ============================================================================
// Create our express application that'll serve everything
const app: express.Application = express();

// ============================================================================
// Support CORS on all endpoints
app.use(cors());


// ============================================================================
// We want to verify JWTs that should be attached to API calls
// Note: Typescript definitions are not available yet: https://github.com/okta/okta-oidc-js/pull/502
const OktaJwtVerifier = require("@okta/jwt-verifier");
const oktaJwtVerifier = new OktaJwtVerifier({
    issuer: process.env.OAUTH_TOKEN_ENDPOINT
});


// ============================================================================
// Import our GraphQL user facing schama
const schema = path.resolve("./schema/schema.graphql");
const typeDefs = importSchema(schema);


// ============================================================================
// This is the Context that will be passed to resolvers
export type Context = {
    user: string;
    prisma: Prisma;
  }


// ============================================================================
// Create our Apollo Server
const apolloServer = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  introspection: true,

  // Note: The playground is always disabled here, it's deployed elsewhere to protect it with an OAuth flow
  playground: false,

  // Generate the context for the resolvers
  context: ({ req }): Context => {
    // Get the 'Authorization' header, which should contain a Bearer token
    const authorizationHeader = req.headers.authorization || "";

    console.log("Authorization: ", authorizationHeader)

    // No Bearer token, no entry
    const match = authorizationHeader.match(/Bearer (.+)/);
    if (!match) {
        throw new AuthenticationError("Authorization header _must_ contain bearer token in the format 'Bearer <Access Token (JWT)>'");
    }

    // Discard the 'Bearer' part from the header and keep the JWT
    const accessToken = match[1];

    // Verify the JWT
    oktaJwtVerifier
      .verifyAccessToken(accessToken, "api://default")
      .then((jwt: { claims: any }) => {
        // the token is valid (per definition of 'valid' above)
        console.log(jwt.claims);
      })
      .catch((err: string) => {
        // a validation failed, inspect the error
        throw new AuthenticationError("you must be logged in" + err);
      });

    // optionally block the user
    // we could also check user roles/permissions here
    return {
      user: accessToken,
      prisma: prisma
    };
  }
}) as any;

apolloServer.applyMiddleware({
  app,
  path: process.env.GRAPHQL_API_PATH
});

// Fire up the Express server and start listening!
var expressServer = app.listen(process.env.PORT, function() {
  var address = (expressServer.address() as AddressInfo).address;
  var port = (expressServer.address() as AddressInfo).port;
  console.log("Running at address %s on port %s", address, port);
});