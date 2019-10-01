module.exports = {
  async project(parent, args, ctx, info) {
    return await ctx.prisma.project({ ...args.where }, info);
  },
  //   users: forwardTo("prisma")
  async projects(parent, args, ctx, info) {
    return await ctx.prisma.projects({ ...args.where }, info);
  }
};
