module.exports = {
    async createProjectRole(parent, args, ctx, info) {
      const projectRole = await ctx.prisma.createProjectRole(
        {
          ...args
        },
        info
      );
      return projectRole;
    },
    async updateProjectRole(parent, args, ctx, info) {
      const projectRole = await ctx.prisma.updateProjectRole(
        {
          ...args
        },
        info
      );
      return projectRole;
    },
    async deleteProjectRole(parent, args, ctx, info) {
      const projectRole = await ctx.prisma.deleteProjectRole(
        {
          ...args
        },
        info
      );
      return projectRole;
Project