# base node image
FROM node:16-bullseye-slim AS base

# install all node_modules, including dev
FROM base AS deps

RUN mkdir /app/
WORKDIR /app/

ADD package.json ./
RUN npm install

# setup production node_modules
FROM base AS production-deps

RUN mkdir /app/
WORKDIR /app/

COPY --from=deps /app/node_modules /app/node_modules
ADD package.json ./
RUN npm prune --omit=dev

# build app
FROM base AS build

RUN mkdir /app/
WORKDIR /app/

COPY --from=deps /app/node_modules /app/node_modules

# build smaller image for running
FROM base

ENV PORT="3000"
ENV NODE_ENV="production"

RUN mkdir /app/
WORKDIR /app/

COPY --from=production-deps /app/node_modules /app/node_modules

ADD . .

# Expose port 3000
EXPOSE 3000

CMD ["npm", "start"]