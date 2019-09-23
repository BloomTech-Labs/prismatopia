"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Group",
    embedded: false
  },
  {
    name: "Person",
    embedded: false
  },
  {
    name: "Product",
    embedded: false
  },
  {
    name: "Project",
    embedded: false
  },
  {
    name: "Role",
    embedded: false
  },
  {
    name: "ProductRole",
    embedded: false
  },
  {
    name: "ProjectRole",
    embedded: false
  },
  {
    name: "LambdaRole",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET
});
exports.prisma = new exports.Prisma();
