// @ts-check
"use strict";

const { prisma } = require("../apollo/src/generated/prisma-client");
const faker = require("faker");

async function main() {
  // Generate a bunch of random users with profiles
  for (var i = 0; i < 100; i++) {
    const user = await prisma.createUser({
      profile: { create: { favorite_color: faker.commerce.color() } },
    });
  }
}

main().catch((e) => console.error(e));
