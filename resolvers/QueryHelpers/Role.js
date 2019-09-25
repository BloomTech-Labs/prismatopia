module.exports = {
  async role(parent, args, ctx, info) {
    return await ctx.prisma.role({ ...args }, info);
  },
  //   users: forwardTo("prisma")
  async roles(parent, args, ctx, info) {
    return await ctx.prisma.roles({ ...args }, info);
  }
};
