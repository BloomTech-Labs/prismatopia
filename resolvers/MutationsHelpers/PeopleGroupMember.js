module.exports = {
  async createPeopleGroupMember(parent, args, ctx, info) {
    const PeopleGroupMember = await ctx.prisma.createPeopleGroupMember(
      {
        ...args
      },
      info
    );
    return PeopleGroupMember;
  },
  async updatePeopleGroupMember(parent, args, ctx, info) {
    const PeopleGroupMember = await ctx.prisma.updatePeopleGroupMember(
      {
        ...args
      },
      info
    );
    return PeopleGroupMember;
  },
  async deletePeopleGroupMember(parent, args, ctx, info) {
    const project = await ctx.prisma.deletePeopleGroupMember(
      {
        ...args
      },
      info
    );
    return PeopleGroupMember;
  }
};
