module.exports = {
  async person(parent, args, ctx, info) {
    return await ctx.prisma.person({ ...args.where }, info);
  },
  async persons(parent, args, ctx, info) {
    return await ctx.prisma.persons({ ...args.where }, info);
  }
};
