# ============================================================================================================
# Create an image containing only the production dependencies
# ============================================================================================================
FROM node:12-alpine AS deps
WORKDIR /app

COPY package.json yarn.lock .yarnclean ./
RUN yarn install --production --silent


# ============================================================================================================
# Build final image using the node_modules from the 'dep' image
# ============================================================================================================
FROM node:12-alpine
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules/

COPY ./schema/ ./schema
COPY ./src/ ./src

CMD [ "node", "src/index.js" ]
EXPOSE 8000
