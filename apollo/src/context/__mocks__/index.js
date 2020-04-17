// Generate Jest mock for the context module
const mockContext = jest.genMockFromModule("../../context");

// A Winston logger, which will be added to the mock context
// Note: This is nice to have while running tests, as you can see logging from the application code
const winston = require("winston");

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || "info",
  format: winston.format.combine(
    winston.format.splat(),
    winston.format.simple()
  ),
  transports: [new winston.transports.Console()],
});
mockContext.logger = logger;

// Create a default authenticated user
// Note: This should really be of type User from (../index.js)
mockContext.user = "Mock";

// Mock the createProfile function to control it for tests
// Generate a mock Prisma client to embed in the context mock
const mockPrismaClient = jest.genMockFromModule("../../generated/prisma-client").prisma;
mockContext.prisma = mockPrismaClient;

module.exports = mockContext;
