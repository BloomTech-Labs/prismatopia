module.exports = {
  async createProjectGroupMember(parent, args, ctx, info) {
    const postBody = { ...args.data };
    delete postBody.id;

    const projectGroup = await ctx.prisma.createProjectGroupMember(
      postBody,
      info
    );
    return projectGroup;
  },
  async updateProjectGroupMember(parent, args, ctx, info) {
    const postBody = { ...args.data };
    delete postBody.id;
    const id = args.data.id;
    const projectGroup = await ctx.prisma.updateProjectGroupMember(
      {
        data: postBody,
        where: { ...args.where }
      },
      info
    );
    return projectGroup;
  },
  async deleteProjectGroupMember(parent, args, ctx, info) {
    const id = args.data.id;
    const projectGroup = await ctx.prisma.deleteProjectGroupMember(
      {
        ...args.where
      },
      info
    );
    return projectGroup;
  }
};
