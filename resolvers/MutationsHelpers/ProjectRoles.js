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
        where: { id }
      },
      info
    );
    return projectRole;
  },
  async deleteProjectRole(parent, args, ctx, info) {
    const id = args.data.id;
    const projectRole = await ctx.prisma.deleteProjectRole(
      {
        id
      },
      info
    );
    return projectRole;
  }
};
