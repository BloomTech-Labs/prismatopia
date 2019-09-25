module.exports = {
  async projectGroupMember(parent, args, ctx, info) {
    return await ctx.prisma.projectGroupMember({ ...args }, info);
  },
  //   users: forwardTo("prisma")
  async projectGroupMembers(parent, args, ctx, info) {
    return await ctx.prisma.projectGroupMembers({ ...args }, info);
  }
};
