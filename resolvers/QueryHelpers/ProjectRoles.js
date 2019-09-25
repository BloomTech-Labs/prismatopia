module.exports = {
  async projectRole(parent, args, ctx, info) {
    return await ctx.prisma.projectRole({ ...args }, info);
  },
  //   users: forwardTo("prisma")
  async projectRoles(parent, args, ctx, info) {
    return await ctx.prisma.projectRoles({ ...args }, info);
  }
};
