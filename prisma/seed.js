const { prisma } = require('../apollo/src/generated/prisma-client')
var faker = require('faker');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function main() {
  // Generate a bunch of random users
  for (var i = 0; i < 100; i++) {
    await prisma.createUser({
      email: faker.internet.email(),
    });
  }
}

main().catch(e => console.error(e));