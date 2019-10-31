# Product Management API

We need a better name for this! :)

## Introduction

Modern enterprises are built on many layers of custom software. Software Engineers, Designers and Data Scientists (among many others) work busily across a wide-array of projects to create, customize and enhance the software that underpins the unique value that a company brings to its customers.

Managing these projects, at scale, over time is a challenging feat, even within a small enterprise. Projects and people are constantly shifting with the changing wants and needs of the business.

The purpose of this API is to act as a system of record for all data and information related to the existence, relationships, state and health of the software projects and people that are the engines of the business.

This API represents the activities at the program level of a business. It does not provide project management capabilities, there are many other great tools for managing a business at that level. It also does not provide capabilities at a strategic business level. Rather the focus of this API is to support strategic initiatives by enabling the efficient tracking of the product and people that drive those initiatives.

## Architecture Representation

There are two main components to the API itself: the data store and the API layer.

<!-- ![](./assets/stack.png)

AWS cloudformation is used to create 3 differrent stacks:

1. A Postgres RDS
2. A Fargate container with Prisma.
3. A Graphql Yoga Lambda function deployed using serverless and exposed using API Gateway

This service can only be accessed using an API key passed in through the header. The exposed endpoint allows graphql queries and mutations.

## Detailed Usage Documentation

[Documentation](https://documenter.getpostman.com/view/5657034/SVtN4rhU?version=latest#fc3525fa-ac3a-45be-ae99-5cee90fcff35) -->
