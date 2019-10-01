module.exports = {
  async productRole(parent, args, ctx, info) {
    return await ctx.prisma.productRole({ ...args.where }, info);
  },
  //   users: forwardTo("prisma")
  async productRoles(parent, args, ctx, info) {
    return await ctx.prisma.productRoles({ ...args.where }, info);
  }
};
