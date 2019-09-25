module.exports = {
  async createRole(parent, args, ctx, info) {
    const postBody = { ...args.data };
    delete postBody.id;

    const role = await ctx.prisma.createRole(postBody, info);
    return role;
  },
  async updateRole(parent, args, ctx, info) {
    const role = await ctx.prisma.updateRole(
      {
        data: postBody,
        where: { id }
      },
      info
    );
    return role;
  },
  async deleteRole(parent, args, ctx, info) {
    const id = args.data.id;
    const role = await ctx.prisma.deleteRole(
      {
        id
      },
      info
    );
    return role;
  }
};
