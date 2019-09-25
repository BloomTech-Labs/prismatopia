module.exports = {
  async lambdaRole(parent, args, ctx, info) {
    return await ctx.prisma.lambdaRole({ ...args }, info);
  },
  //   users: forwardTo("prisma")
  async lambdaRoles(parent, args, ctx, info) {
    return await ctx.prisma.lambdaRoles({ ...args }, info);
  }
};
