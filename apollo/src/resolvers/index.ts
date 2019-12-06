import { Context } from "..";

export const resolvers = {
  Query: {
    products: (root, args, ctx: Context) => {
      console.log("Resolver")
      return ctx.prisma.products()
    }
  }
};