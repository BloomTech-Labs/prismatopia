// @ts-check
'use strict'

// Apollo dependencies
const { AuthenticationError } = require('apollo-server')
const jwt = require('jsonwebtoken')

// We'll need this to convert from callback based functions
const { promisify } = require('util')

// Used to retrieve the public key for JWT validation
const JwksClient = require('jwks-rsa')

// Used for proper logging
const winston = require('winston')
const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.splat(),
    winston.format.simple()
  ),
  transports: [new winston.transports.Console()]
})

// The generated Prisma client
const { prisma } = require('../generated/prisma-client')

/**
 * The context passed to the resolvers
 *
 * @constructor
 * @param {import('../generated/prisma-client').Prisma} prisma The generated Prisma client
 * @param {User} user The currently authenticated user
 * @param {import('winston').Logger} logger A logger
 */
function Context (prisma, user, logger) {
  this.user = user
  this.prisma = prisma
  this.logger = logger

  console.log('Logging level: %s', logger.level)
}

/**
 * The user in the context
 *
 * @constructor
 * @param {string} id
 * @param {string} name
 * @param {string} email
 * @param {[string]} groups
 */
function User (id, name, email, groups) {
  this.id = id
  this.name = name
  this.email = email
  this.groups = groups
}

// This function is called by the JWT verifier, which sends the JWT header and a
// callback to return the public key used for verifying the JWT signature
/**
 *
 * @param {import('jsonwebtoken').JwtHeader} header
 * @returns {Promise<string>} key
 */
const getKey = async (header) => {
  const { JWKS_URI } = process.env

  // Creates a JWKS Client
  const jwksClient = JwksClient({
    // URL of the JSON Web Key Set JWKS used to verifying the JWT
    jwksUri: JWKS_URI
  })

  // Promisify the callback based function: https://github.com/auth0/node-jsonwebtoken/issues/111
  const getSigningKey = promisify(jwksClient.getSigningKey)

  // Get the signing key
  let key
  try {
    key = await getSigningKey(header.kid)
  } catch (err) {
    logger.error(
      'Error while retrieving signing key (%O) from %O',
      header.kid,
      JWKS_URI
    )
    throw new AuthenticationError('Not authorized')
  }

  logger.debug(
    'Retrieved public key from (%O) with kid (%O): %O',
    JWKS_URI,
    header.kid,
    key
  )

  const publicKey = key.rsaPublicKey

  return publicKey
}

/**
 * Async factory for the context
 *
 * @param  { {req: import('Express').Request} } req
 * @return { Promise<Context> } context
 */
const context = async ({ req }) => {
  // Grab the 'Authorization' token from the header
  const authorizationHeader = req.header('Authorization')
  if (
    typeof authorizationHeader !== 'string' ||
    authorizationHeader === 'null' ||
    authorizationHeader === ''
  ) {
    logger.error(
      'Authorization token missing from request headers: %O',
      req.headers
    )
    throw new AuthenticationError('Not authorized')
  }

  // Strip off the 'Bearer ' part from the header
  const token = authorizationHeader.replace(/^Bearer\s/, '')

  // Decode the JWT so we can get the header
  logger.debug('Decoding token: %s', token)
  let tokenHeader
  try {
    const decodedToken = jwt.decode(token, { complete: true })
    tokenHeader = (/** @type {{[key: string]: any;}} */ (decodedToken)).header
  } catch (err) {
    logger.error('Error while decoding token: %O', token, err)
    throw new AuthenticationError('Not authorized')
  }

  // Get the public key from the OAuth endpoint
  logger.debug('Retrieving public key used for JWT validation')
  const pubKey = await getKey(tokenHeader)

  // Options used for verifying the JWT
  /** @type { import('jsonwebtoken').VerifyOptions } */
  const jwtVerifyOptions = {
    // Check the issuer to validate the source of the JWT
    issuer: process.env.JWT_ISSUER,
    algorithms: ['RS256']
  }

  // Verify the JWT
  logger.debug('Verifying and decoding JWT')

  /** @type {{object}} */
  let decodedJWT
  try {
    decodedJWT = (/** @type {{object}} */ (jwt.verify(token, pubKey, jwtVerifyOptions)))
  } catch (err) {
    logger.error('Error while verifying token: %O\n%O', token, err)
    throw new AuthenticationError('Not authorized')
  }

  // Create the User using the information from the JWT
  logger.debug('Creating User using decoded JWT: %O', decodedJWT)
  const user = new User(
    decodedJWT.sub,
    decodedJWT.email,
    decodedJWT.name,
    decodedJWT.groups
  )

  // Don't let anyone past this point if they aren't authenticated
  if (typeof user === 'undefined' || user == null) {
    logger.error('Unable to authenticate user: %O', req.header)
    throw new AuthenticationError('Not authorized')
  }

  logger.debug('Current user: %O', user)

  // Pack the user, Prisma client and Winston logger into the context
  return new Context(prisma, user, logger)
}

module.exports = context
