# ======================================================
# Builds the application
# ======================================================
FROM node:12-alpine AS build
WORKDIR /app
COPY package.json npm-shrinkwrap.json tsconfig.json ./
COPY src/ ./src/
COPY schema/ ./schema/
RUN npm install --silent && npm run build


# ======================================================
# Creates an image with just the production deps
# ======================================================
FROM node:12-alpine AS deps
WORKDIR /app
COPY package.json npm-shrinkwrap.json ./
RUN npm install --production --silent


# ======================================================
# Builds the final image from the previous two
# ======================================================
FROM node:12-alpine
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules/
COPY --from=build /app/dist ./
CMD [ "node", "index.js" ]
EXPOSE 8000
