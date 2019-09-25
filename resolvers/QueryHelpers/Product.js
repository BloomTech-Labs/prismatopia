module.exports = {
  async product(parent, args, ctx, info) {
    return await ctx.prisma.product({ ...args }, info);
  },
  //   users: forwardTo("prisma")
  async products(parent, args, ctx, info) {
    return await ctx.prisma.products({ ...args }, info);
  }
};
