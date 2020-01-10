FROM node:13-alpine

# Drop all the code-stuff in an easy to locate directory
WORKDIR /app

# Copy application source files
COPY package.json .
COPY package-lock.json .
RUN npm install

COPY tsconfig.json .
COPY src ./src
COPY schema ./schema
RUN npm run build

CMD [ "npm", "start" ]
EXPOSE 8000
