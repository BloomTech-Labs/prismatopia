module.exports = {
  async createPerson(parent, args, ctx, info) {
    const postBody = { ...args.data };
    const person = await ctx.prisma.createPerson(postBody, info);
    return person;
  },
  async updatePerson(parent, args, ctx, info) {
    console.log("help god i love you");
    const postBody = { ...args.data };
    const id = args.data.id;
    const person = await ctx.prisma.updatePerson(
      {
        data: postBody,
        where: { ...args.where }
      },
      info
    );
    return person;
  },
  async deletePerson(parent, args, ctx, info) {
    const person = await ctx.prisma.deletePerson({ ...args.where }, info);
    return person;
  }
};
