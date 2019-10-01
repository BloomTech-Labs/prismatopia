module.exports = {
  async peopleGroup(parent, args, ctx, info) {
    return await ctx.prisma.peopleGroup({ ...args.where }, info);
  },
  //   users: forwardTo("prisma")
  async peopleGroups(parent, args, ctx, info) {
    return await ctx.prisma.peopleGroups({ ...args.where }, info);
  }
};
