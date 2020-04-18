# Prismatopia

Prismatopia is a GraphQL API stack combining a bunch of super-awesome technologies: Apollo Server 2, Prisma, Postgres, Docker, AWS, OAuth, Make, Yeoman and more!

[![Maintainability](https://api.codeclimate.com/v1/badges/015ff2fee461e3bc2b2b/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/prismatopia/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/015ff2fee461e3bc2b2b/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/prismatopia/test_coverage)
![CI](https://github.com/Lambda-School-Labs/prismatopia/workflows/CI/badge.svg)
[![Dependency Status][daviddm-image]][daviddm-url]

## The Stack

This API is built as a very specific stack of technologies. There no options, other than configuring the existing stack components or swapping them out in your own copy. Enjoy!

Here are the technologies in this stack...

### Apollo Server 2

- Provides a GraphQL server for resolvers, which is where your business logic lives

### Prisma

- Provides an ORM to translate from Graphql to Postgres, Apollo resolvers mainly call a Prisma Client to access data

### Postgres

- Provides persistent storage for data, this is managed by AWS RDS in production but is run in a container during local development

### AWS

- Handles networking (ALB, VPC, etc.) and container management (ECS)

### OAuth

- Apollo is setup for validating JWTs from clients (Works with [Okta](https://www.okta.com/) out of the box)

### Docker

- There's a local Docker Compose setup for easy development. Also, all AWS services (except Postgres) run in containers

## Prismatopia Documentation

- [Main Documentation](prismatopia.md)
  - [The Apollo Layer](apollo/README.md)
  - [The Prisma Layer](prisma/README.md)
  - [The AWS Layer](aws/README.md)

## License

MIT © [Lambda School](https://lambdaschool.com)

[npm-image]: https://badge.fury.io/js/%40lambdaschool%2Fgenerator-prismatopia.svg
[npm-url]: https://www.npmjs.com/package/@lambdaschool/generator-prismatopia
[daviddm-image]: https://david-dm.org/Lambda-School-Labs/generator-prismatopia.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Lambda-School-Labs/generator-prismatopia
