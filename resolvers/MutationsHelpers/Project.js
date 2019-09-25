module.exports = {
  async createProject(parent, args, ctx, info) {
    const project = await ctx.prisma.createProject(
      {
        ...args
      },
      info
    );
    return project;
  },
  async updateProject(parent, args, ctx, info) {
    const project = await ctx.prisma.updateProject(
      {
        ...args
      },
      info
    );
    return project;
  },
  async deleteProject(parent, args, ctx, info) {
    const project = await ctx.prisma.deleteProject(
      {
        ...args
      },
      info
    );
    return project;
  }
};
