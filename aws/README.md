# The AWS Layer of Prismatopia

"Always do everything as code" - Me

Prismatopia is made to be flexible. The expectation is that you'll have an application with several different environments running at once (e.g. production, stage, etc.) To enable this, all of the scripts and files include a variable for the name of the Application and the name of the Environment.

Building the AWS infrastructure is split into two levels: the application infrastructure and the environment infrastructure

These stacks are layered to help make them more manageable and are linked together using Cloudformation output exports. This can make for some gnarly dependencies, but for now it's the best way to build a big stack from a bunch of smaller stacks.

## The Stacks

You can deploy everything to AWS using `make aws-deploy-all` which runs the stacks in this order (notice some stacks build application level resources, the rest are environment specific):

`app-iam.cf.yaml`
IAM resources get created first because they almost never depend on anything else, but many things depend on them. The IAM resources are also left in a separate file because it's common practice to restrict IAM permissions to a smaller group of engineers than other components.

`app-network.cf.yaml`
This is the VPC and slew of networking components that are used across the whole application, in every environment.

`app-dns.cf.yaml`
TODO: This can probably be merged into the network stack, needs some analysis.

`env-network.cf.yaml`
Build some environment specific networking components, like load balancers.

`env-db.cf.yaml`
Build the database. This is in a separate file because it is sloooooow. So you don't want to have to run it any more than you have to.

`env-prisma.cf.yaml`
Build the Prisma service.

`env-apollo.cf.yaml`
Finally, build the top layer, which is Apollo. This depends on a Docker image that is custom created for your application. That must be built and pushed to Docker Hub first using `make apollo-push`
