// @ts-check
'use strict'

/**
 * @param {{ where: import('../generated/prisma-client').UserWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
module.exports.user = async (_parent, args, context) => {
  console.log('Query.user.args: %j', args)

  const user = await context.prisma.user(args.where)

  console.log('Query.user: %j', user)

  return user
}

/**
 * @param {{ where: import('../generated/prisma-client').UserWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
module.exports.users = async (_parent, args, context) => {
  console.log('Query.user.args: %j', args)

  const user = await context.prisma.users(args)

  console.log('Query.user: %j', user)

  return user
}
