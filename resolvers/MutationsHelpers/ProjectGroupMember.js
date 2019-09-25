module.exports = {
  async createProjectGroupMember(parent, args, ctx, info) {
    const projectGroup = await ctx.prisma.createProjectGroupMember(
      {
        ...args
      },
      info
    );
    return projectGroup;
  },
  async updateProjectGroupMember(parent, args, ctx, info) {
    const projectGroup = await ctx.prisma.updateProjectGroupMember(
      {
        ...args
      },
      info
    );
    return projectGroup;
  },
  async deleteProjectGroupMember(parent, args, ctx, info) {
    const projectGroup = await ctx.prisma.deleteProjectGroupMember(
      {
        ...args
      },
      info
    );
    return projectGroup;
  }
};
