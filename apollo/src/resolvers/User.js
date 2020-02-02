// @ts-check

/**
 * @param { import('../generated/prisma-client').User } parent
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
const profile = async (parent, _, context) => {
  console.log("User.profile.parent: %j", parent)

  const profile = await context.prisma.user({id: parent.id}).profile();

  console.log("User.profile: %j", profile)
  
  return profile;
};


module.exports = {
  profile,
};
