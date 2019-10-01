module.exports = {
  async createProjectGroup(parent, args, ctx, info) {
    const postBody = { ...args.data };
    delete postBody.id;

    const projectGroup = await ctx.prisma.createProjectGroup(postBody, info);
    return projectGroup;
  },
  async updateLambdaRole(parent, args, ctx, info) {
    const postBody = { ...args.data };
    delete postBody.id;
    const id = args.data.id;
    const projectGroup = await ctx.prisma.updateProjectGroup(
      {
        body: postBody,
        where: { ...args.where }
      },
      info
    );
    return projectGroup;
  },
  async deleteLambdaRole(parent, args, ctx, info) {
    const projectGroup = await ctx.prisma.deleteProjectGroup(
      {
        ...args.where
      },
      info
    );
    return projectGroup;
  }
};
