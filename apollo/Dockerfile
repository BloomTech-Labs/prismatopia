FROM alpine:3.9

ARG WORKDIR='/apollo'
WORKDIR $WORKDIR

# Create Apollo directory
RUN mkdir -p $WORKDIR

# Install app dependencies
COPY package.json .
COPY yarn.lock .
COPY tsconfig.json .

RUN apk add yarn
RUN yarn install --production

# Bundle app source
COPY src src

EXPOSE 8000
CMD [ "yarn", "start" ]
