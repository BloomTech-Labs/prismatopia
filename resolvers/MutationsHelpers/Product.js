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
    const postBody = { ...args.data };
    const id = args.data.id;
    delete postBody.id;
    const product = await ctx.prisma.updateProduct(
      {
        data: postBody,
        where: { id }
      },
      info
    );
    return product;
  },
  async deleteProduct(parent, args, ctx, info) {
    const id = args.data.id;

    const product = await ctx.prisma.deleteProduct(
      {
        id
      },
      info
    );
    return product;
  }
};
