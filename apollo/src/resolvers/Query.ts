import { Resolvers } from "../generated/types";


export const resolvers: Resolvers = {
  Query: {
    product: (root, args, ctx) => {
      var product = ctx.prisma.product({id: args.id});
      return product
    },
    products: (root, args, ctx) => {
      return ctx.prisma.products();
    }
  }
};
