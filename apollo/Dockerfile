FROM node:12 AS build-stage

# Drop all the code-stuff in an easy to locate directory
WORKDIR /app

# Copy the runtime stuff
COPY package.json npm-shrinkwrap.json dist ./

# Install production dependencies and try to minimize the size of node_modules
RUN npm install --production --silent && npm dedupe && npm prune && npm cache clean --force




FROM node:12-alpine

# Drop all the code-stuff in an easy to locate directory
WORKDIR /app

# Copy the pre-built application from the build stage
COPY --from=build-stage /app .

CMD [ "node", "index.js" ]
EXPOSE 8000
