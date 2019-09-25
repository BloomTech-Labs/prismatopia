module.exports = {
  async createPerson(parent, args, ctx, info) {
    const postBody = { ...args.data };
    const person = await ctx.prisma.createPerson(postBody, info);
    return person;
  },
  async updatePerson(parent, args, ctx, info) {
    const postBody = { ...args.data };
    const id = args.data.id;
    const person = await ctx.prisma.updatePerson(
      {
        data: postBody,
        where: { id: id }
      },
      info
    );
    return person;
  },
  async deletePerson(parent, args, ctx, info) {
    const person = await ctx.prisma.deletePerson(
      {
        where: { id: args.data.id }
      },
      info
    );
    return person;
  }
};
