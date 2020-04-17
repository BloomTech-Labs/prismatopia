// jest.config.js
const {defaults} = require('jest-config');
module.exports = {
  // This is a monorepo, so we need to tell Jest where the actual projects are
  projects: ["apollo", "prisma"],
};