module.exports = {
  async projectGroupMember(parent, args, ctx, info) {
    return await ctx.prisma.projectGroupMember({ ...args.where }, info);
  },
  //   users: forwardTo("prisma")
  async projectGroupMembers(parent, args, ctx, info) {
    return await ctx.prisma.projectGroupMembers({ ...args.where }, info);
  }
};
