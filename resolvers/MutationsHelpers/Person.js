module.exports = {
  async createPerson(parent, args, ctx, info) {
    const person = await ctx.prisma.createPerson(
      {
        ...args
      },
      info
    );
    return person;
  },
  async updatePerson(parent, args, ctx, info) {
    const person = await ctx.prisma.updatePerson(
      {
        ...args
      },
      info
    );
    return person;
  },
  async deletePerson(parent, args, ctx, info) {
    const person = await ctx.prisma.deletePerson(
      {
        ...args
      },
      info
    );
    return person;
  }
};
