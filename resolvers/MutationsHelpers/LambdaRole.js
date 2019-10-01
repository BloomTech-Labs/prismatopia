module.exports = {
  async createLambdaRole(parent, args, ctx, info) {
    const postBody = { ...args.data };
    const lambdaRole = await ctx.prisma.createLambdaRole(postBody, info);
    return lambdaRole;
  },
  async updateLambdaRole(parent, args, ctx, info) {
    const postBody = { ...args.data };
    const id = args.data.id;
    delete postBody.id;
    const lambdaRole = await ctx.prisma.updateLambdaRole(
      {
        data: postBody,
        where: { ...args.where }
      },
      info
    );
    return lambdaRole;
  },
  async deleteLambdaRole(parent, args, ctx, info) {
    const lambdaRole = await ctx.prisma.deleteLambdaRole(
      {
        ...args.where
      },
      info
    );
    return lambdaRole;
  }
};
