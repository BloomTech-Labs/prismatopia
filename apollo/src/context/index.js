const { prisma } = require('../generated/prisma-client');
const decodeToken = require('../auth');

// Create context object to pass request, user and prisma client
// into all resolvers. Throws error if requests are not authenticated.
const context = async ({ req }) => {
  const { authorization } = req.headers;
  if (authorization) {
    const user = await decodeToken(authorization);
    return { ...req, user, prisma };
  }
  // For development only, remove before deployment
  // Or if you're testing authentication flow
  return { req, prisma };
};

module.exports = context;
