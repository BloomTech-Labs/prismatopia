module.exports = {
  async createProduct(parent, args, ctx, info) {
    const postBody = { ...args.data };
    const product = await ctx.prisma.createProduct(postBody, info);
    return product;
  },
  async updateProduct(parent, args, ctx, info) {
    const postBody = { ...args.data };
    const id = args.data.id;
    delete postBody.id;
    const product = await ctx.prisma.updateProduct(
      {
        data: postBody,
        where: { ...args.where }
      },
      info
    );
    return product;
  },
  async deleteProduct(parent, args, ctx, info) {
    const product = await ctx.prisma.deleteProduct(
      {
        ...args.where
      },
      info
    );
    return product;
  }
};
