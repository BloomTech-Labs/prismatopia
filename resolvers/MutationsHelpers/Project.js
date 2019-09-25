module.exports = {
  async createProject(parent, args, ctx, info) {
    const postBody = { ...args.data };
    delete postBody.id;
    const project = await ctx.prisma.createProject(postBody, info);
    return project;
  },
  async updateProject(parent, args, ctx, info) {
    const postBody = { ...args.data };
    delete postBody.id;
    const id = args.data.id;
    const project = await ctx.prisma.updateProject(
      {
        body: postBody,
        where: { id }
      },
      info
    );
    return project;
  },
  async deleteProject(parent, args, ctx, info) {
    const id = args.data.id;
    const project = await ctx.prisma.deleteProject(
      {
        id
      },
      info
    );
    return project;
  }
};
