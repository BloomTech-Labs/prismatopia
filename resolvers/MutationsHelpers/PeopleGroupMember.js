module.exports = {
  async createPeopleGroupMember(parent, args, ctx, info) {
    const postBody = { ...args.data };

    const PeopleGroupMember = await ctx.prisma.createPeopleGroupMember(
      postBody,
      info
    );
    return PeopleGroupMember;
  },
  async updatePeopleGroupMember(parent, args, ctx, info) {
    const postBody = { ...args.data };
    const id = args.data.id;
    delete postBody.id;
    const PeopleGroupMember = await ctx.prisma.updatePeopleGroupMember(
      {
        data: postBody,
        where: { id }
      },
      info
    );
    return PeopleGroupMember;
  },
  async deletePeopleGroupMember(parent, args, ctx, info) {
    const id = args.data.id;
    const project = await ctx.prisma.deletePeopleGroupMember(
      {
        id
      },
      info
    );
    return project;
  }
};
