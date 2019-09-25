module.exports = {
  async createLambdaRole(parent, args, ctx, info) {
    const lambdaRole = await ctx.prisma.createLambdaRole(
      {
        ...args
      },
      info
    );
    return lambdaRole;
  },
  async updateLambdaRole(parent, args, ctx, info) {
    const lambdaRole = await ctx.prisma.updateLambdaRole(
      {
        ...args
      },
      info
    );
    return lambdaRole;
  },
  async deleteLambdaRole(parent, args, ctx, info) {
    const project = await ctx.prisma.deleteLambdaRole(
      {
        ...args
      },
      info
    );
    return lambdaRole;
  }
};
