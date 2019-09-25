module.exports = {
  async projects(parent, args, ctx, info) {
    console.log(ctx.prisma.user, args.id);
    return await ctx.prisma.projects({ ...args }, info);
  }
};
