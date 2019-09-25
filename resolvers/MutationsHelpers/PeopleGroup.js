module.exports = {
  async createPeopleGroup(parent, args, ctx, info) {
    const postBody = { ...args.data };

    const peopleGroup = await ctx.prisma.createPeopleGroup(postBody, info);
    return peopleGroup;
  },
  async updatePeopleGroup(parent, args, ctx, info) {
    const postBody = { ...args.data };
    const id = args.data.id;
    delete postBody.id;
    const peopleGroup = await ctx.prisma.updatePeopleGroup(
      {
        data: postBody,
        where: { id }
      },
      info
    );
    return peopleGroup;
  },
  async deletePeopleGroup(parent, args, ctx, info) {
    const id = args.data.id;
    const peopleGroup = await ctx.prisma.deletePeopleGroup(
      {
        id
      },
      info
    );
    return peopleGroup;
  }
};
