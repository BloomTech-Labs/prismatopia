module.exports = {
  async createRole(parent, args, ctx, info) {
    const role = await ctx.prisma.createRole(
      {
        ...args
      },
      info
    );
    return role;
  },
  async updateRole(parent, args, ctx, info) {
    const role = await ctx.prisma.updateRole(
      {
        ...args
      },
      info
    );
    return role;
  },
  async deleteRole(parent, args, ctx, info) {
    const role = await ctx.prisma.deleteRole(
      {
        ...args
      },
      info
    );
    return role;
  }
};
