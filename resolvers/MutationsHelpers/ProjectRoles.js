module.exports = {
  async createProjectRole(parent, args, ctx, info) {
    const postBody = { ...args.data };
    delete postBody.id;

    const projectRole = await ctx.prisma.createProjectRole(postBody, info);
    return projectRole;
  },
  async updateProjectRole(parent, args, ctx, info) {
    const postBody = { ...args.data };
    delete postBody.id;
    const id = args.data.id;
    const projectRole = await ctx.prisma.updateProjectRole(
      {
        data: postBody,
        where: { ...args.where }
      },
      info
    );
    return projectRole;
  },
  async deleteProjectRole(parent, args, ctx, info) {
    const id = args.data.id;
    const projectRole = await ctx.prisma.deleteProjectRole(
      {
        ...args.where
      },
      info
    );
    return projectRole;
  }
};
