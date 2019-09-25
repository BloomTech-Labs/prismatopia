module.exports = {
  async createProduct(parent, args, ctx, info) {
    const product = await ctx.prisma.createProduct(
      {
        ...args
      },
      info
    );
    return product;
  },
  async updateProduct(parent, args, ctx, info) {
    const product = await ctx.prisma.updateProduct(
      {
        ...args
      },
      info
    );
    return project;
  },
  async deleteProduct(parent, args, ctx, info) {
    const product = await ctx.prisma.deleteProduct(
      {
        ...args
      },
      info
    );
    return product;
  }
};
