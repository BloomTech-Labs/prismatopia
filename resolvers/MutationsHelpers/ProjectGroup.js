module.exports = {
  async createProjectGroup(parent, args, ctx, info) {
    const projectGroup = await ctx.prisma.createProjectGroup(
      {
        ...args
      },
      info
    );
    return projectGroup;
  },
  async updateLambdaRole(parent, args, ctx, info) {
    const projectGroup = await ctx.prisma.updateProjectGroup(
      {
        ...args
      },
      info
    );
    return projectGroup;
  },
  async deleteLambdaRole(parent, args, ctx, info) {
    const projectGroup = await ctx.prisma.deleteProjectGroup(
      {
        ...args
      },
      info
    );
    return projectGroup;
  }
};
