// @ts-check
'use strict'

/**
 * @param { import('../generated/prisma-client').User } parent
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
module.exports.profile = async (parent, _args, context) => {
  console.log('User.profile.parent: %j', parent)

  const profile = await context.prisma.user({ id: parent.id }).profile()

  console.log('User.profile: %j', profile)

  return profile
}
