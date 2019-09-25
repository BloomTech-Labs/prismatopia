module.exports = {
  async peopleGroupMember(parent, args, ctx, info) {
    return await ctx.prisma.peopleGroupMember({ ...args }, info);
  },
  //   users: forwardTo("prisma")
  async peopleGroupMembers(parent, args, ctx, info) {
    return await ctx.prisma.peopleGroupMembers({ ...args }, info);
  }
};
