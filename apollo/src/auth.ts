// Make sure we're ready to start!
require("dotenv").config();

import validateEnv from "valid-env";
validateEnv(["OKTA_ORG_URL"]);

import jwksClient from "jwks-rsa";

// This is the URL for obtaining the public signing keys from the 
let jwksUri = `${process.env.OKTA_ORG_URL}/oauth2/default/v1/keys`;
const client = jwksClient({
  jwksUri: jwksUri,
  cache: true
});

import util from "util";
const getSigningKeys = util.promisify(client.getSigningKeys).bind(client);

async function getPublicSigningKey(): Promise<string> {
  try {
    var signingKeys = await getSigningKeys();
  } catch (err) {
    console.log("Error while retrieving signing keys:", err);
  }

  if (!signingKeys || signingKeys.length == 0) {
    throw new Error("JWKS endpoint ${jwksUri} didn't return any signing keys");
    
  } else if (signingKeys.length > 1) {
    throw new Error(
      "JWKS endpoint ${jwksUri} returned more than one signing key, not sure which one to use"
    );
  }

  console.log("Public signing key:", signingKeys[0]);

  var publicSigningKey: string
  if (signingKeys[0]["rsaPublicKey"]) {
    publicSigningKey = signingKeys[0]["rsaPublicKey"];
  } else if (signingKeys[0]["publicKey"]) {
    publicSigningKey = signingKeys[0]["publicKey"];
  } else {
    throw new Error(
      "JWKS endpoint ${jwksUri} returned an unrecognized type of key"
    );
  }

  return publicSigningKey
}

// For working with JWTs
import jwt from "jsonwebtoken";

export async function verifyAccessToken(token: string): Promise<boolean> {
  var publicSigningKey = await getPublicSigningKey();
  var decoded = jwt.verify(token, publicSigningKey);

  console.log("Decoded Access Token", decoded);

  return true;
}

//   var cert = fs.readFileSync('public.pem');  // get public key
//   jwt.verify(token, cert, function(err, decoded) {
//     console.log(decoded.foo) // bar
//   });
// }

// export interface User {
//   _id: string;
//   username: string;
// }

// // An instance of an Okta JWT verifier
// const jwtVerifier = new JWTVerifier({
//   issuer: `${process.env.OKTA_ORG_URL}/oauth2/default`,
//   clientId: process.env.OKTA_CLIENT_ID
// });

// // An instance of the Okta client for authn and authz
// const oktaClient = new okta.Client({
//   orgUrl: process.env.OKTA_ORG_URL,
//   token: process.env.OKTA_TOKEN
// });

// export async function verifyAccessToken(token: string): Promise<jwt> {
//   return await jwtVerifier.verifyAccessToken(token, "api://default")
// }

// /**
//  * Returns the UserID for the provided token
//  *
//  * @param token The JWT from the caller
//  */
// export async function getUserIdFromToken(token: string): Promise<User> {
//   if (!token) {
//     console.log("Cannot verify empty token");

//     return;
//   }

//   console.log("Verifying access token:", token);

//   try {
//     const jwt = await jwtVerifier.verifyAccessToken(token, "api://default")

//     console.log("Verified access token:", jwt);

//     return jwt.claims.sub;
//   } catch (error) {
//     console.log("Caught error");
//     console.log("Unable to verify JWT:", error);
//     return;
//   }

//   console.log("End of getUserIdFromToken");
// }

// /**
//  * Returns the user object for the user id
//  *
//  * @param userId A valid user id
//  */
// export default userId => {
//   if (!userId) return;
//   try {
//     const user = oktaClient.getUser(userId);
//     return user.profile;
//   } catch (error) {
//     // ignore
//   }
// };
