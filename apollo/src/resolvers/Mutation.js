// @ts-check

/**
 * @param {{ data: import('../generated/prisma-client').UserCreateInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { import('../generated/prisma-client').UserPromise }
 */
const createUser = (_, args, context) => {
  console.log("createUser.args: %j", args)

  const user = context.prisma.createUser(args.data);  

  return user;
};

module.exports = {
  createUser,
};
