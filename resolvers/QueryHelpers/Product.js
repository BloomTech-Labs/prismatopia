module.exports = {
  async product(parent, args, ctx, info) {
    return await ctx.prisma.product({ ...args.where }, info);
  },
  //   users: forwardTo("prisma")
  async products(parent, args, ctx, info) {
    return await ctx.prisma.products({ ...args.where }, info);
  }
};
