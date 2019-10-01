module.exports = {
  async peopleGroupMember(parent, args, ctx, info) {
    return await ctx.prisma.peopleGroupMember({ ...args.where }, info);
  },
  //   users: forwardTo("prisma")
  async peopleGroupMembers(parent, args, ctx, info) {
    return await ctx.prisma.peopleGroupMembers({ ...args.where }, info);
  }
};
