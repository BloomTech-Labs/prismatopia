# labby Serverless

## Introduction

This document provides a high level overview and explains the architecture of Labby Serveless. The Document defines goals of the architecture and the use cases supported by this system

## Purpose

This software is intended to be the foundation and source of truth for multiple products that will help run Lambda Labs smoothly at scale. Also, provide a secure way to access relevant information.

## Architecture Representation

![](./assets/stack.png)

AWS cloudformation is used to create 3 differrent stacks:

1. A Postgres RDS
2. A Fargate container with Prisma.
3. A Graphql Yoga Lambda function deployed using serverless and exposed using API Gateway

This service can only be accessed using an API key passed in through the header. The exposed endpoint allows graphql queries and mutations.

## Connecting Using React

Dependencies Needed

- `apollo-boost`
- `@apollo/react-hooks`
- `graphql`

Type in the terminal
`yarn add apollo-boost @apollo/react-hooks graphql`

Step 1. `import ApolloClient from "apollo-boost"`
and
`import { ApolloProvider } from "@apollo/react-hooks"`
![](./assets/ApolloPart1.png)

Step 2. Create a Apollo Client and Attach it to your Apollo Provider and Wrap your React Components in Index.js.
Do not forget that you need the `header` property and the `x-api-key` key value pair. Contact bernie or hamza for access.

![](./assets/ApolloPart2.png)

Step 3. Secondly you need to see the schema to be able know how to write queries and mutations!

After attaching the provider you can make queries by following the example.

![](./assets/ApolloPart3.png)

For more information please visit https://www.apollographql.com/docs/react/
