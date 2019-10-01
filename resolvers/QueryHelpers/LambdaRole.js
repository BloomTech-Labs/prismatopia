module.exports = {
  async lambdaRole(parent, args, ctx, info) {
    return await ctx.prisma.lambdaRole({ ...args.where }, info);
  },
  //   users: forwardTo("prisma")
  async lambdaRoles(parent, args, ctx, info) {
    return await ctx.prisma.lambdaRoles({ ...args.where }, info);
  }
};
