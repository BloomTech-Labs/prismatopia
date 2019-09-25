module.exports = {
  async person(parent, args, ctx, info) {
    return await ctx.prisma.person({ ...args }, info);
  },
  //   users: forwardTo("prisma")
  async persons(parent, args, ctx, info) {
    return await ctx.prisma.persons({ ...args }, info);
  }
};
