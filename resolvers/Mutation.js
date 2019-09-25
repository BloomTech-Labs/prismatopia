module.exports = {
  async createProject(parent, args, ctx, info) {
    console.log(args);
    const project = await ctx.prisma.createProject({
      ...args,
      connect: { product: args.product_id }
    });
    return project;
  }
};
