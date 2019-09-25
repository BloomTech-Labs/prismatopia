module.exports = {
  async createPeopleGroup(parent, args, ctx, info) {
    const peopleGroup = await ctx.prisma.createPeopleGroup(
      {
        ...args
      },
      info
    );
    return peopleGroup;
  },
  async updatePeopleGroup(parent, args, ctx, info) {
    const peopleGroup = await ctx.prisma.updatePeopleGroup(
      {
        ...args
      },
      info
    );
    return peopleGroup;
  },
  async deletePeopleGroup(parent, args, ctx, info) {
    const peopleGroup = await ctx.prisma.deletePeopleGroup(
      {
        ...args
      },
      info
    );
    return peopleGroup;
  }
};
