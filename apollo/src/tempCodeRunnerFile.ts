// Make sure we're ready to start!
require('dotenv').config()

import validateEnv from "valid-env";
validateEnv([
  "OKTA_ORG_URL"
]);

import jwksClient from 'jwks-rsa';

let jwksUri = `${process.env.OKTA_ORG_URL}/oauth2/default/v1/keys`
const client = jwksClient({
  strictSsl: true, // Default value
  jwksUri: jwksUri
});

let publicSigningKey: string
client.getSigningKeys((err: Error, keys: jwksClient.SigningKey[]) => {
  if(err) {
    console.log("Error while retrieving signing key:", err)
  }

  if (keys.length == 0) {
    throw new Error("JWKS endpoint ${jwksUri} returned more than one signing key, not sure which one to use")
  }
  else if (keys.length > 1) {
    throw new Error("JWKS endpoint ${jwksUri} didn't return any signing keys")
  }
  
  console.log("Public signing key:",keys[0])

  if(keys[0]['rsaPublicKey']) {
    publicSigningKey = keys[0]['rsaPublicKey']
  }
  else if(keys[0]['publicKey']) {
    publicSigningKey = keys[0]['publicKey']
  }
  else {
    throw new Error("JWKS endpoint ${jwksUri} returned an unrecognized type of key")
  }
});