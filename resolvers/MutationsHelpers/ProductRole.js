module.exports = {
  async createProductRole(parent, args, ctx, info) {
    const productRole = await ctx.prisma.createProductRole(
      {
        ...args
      },
      info
    );
    return productRole;
  },
  async updateProductRole(parent, args, ctx, info) {
    const productRole = await ctx.prisma.updateProductRole(
      {
        ...args
      },
      info
    );
    return productRole;
  },
  async deleteProductRole(parent, args, ctx, info) {
    const productRole = await ctx.prisma.deleteProductRole(
      {
        ...args
      },
      info
    );
    return productRole;
  }
};
