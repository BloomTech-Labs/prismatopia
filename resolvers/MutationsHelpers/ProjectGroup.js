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
        where: { id }
      },
      info
    );
    return projectGroup;
  },
  async deleteLambdaRole(parent, args, ctx, info) {
    const id = args.data.id;
    const projectGroup = await ctx.prisma.deleteProjectGroup(
      {
        id
      },
      info
    );
    return projectGroup;
  }
};
