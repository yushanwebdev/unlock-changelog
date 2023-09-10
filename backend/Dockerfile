# base node image
FROM node:18-bullseye-slim as base

# install all node_modules, including dev
FROM base as deps

RUN mkdir /app/
WORKDIR /app/

ADD package.json package-lock.json ./
RUN npm install

# setup production node_modules
FROM base as production-deps

RUN mkdir /app/
WORKDIR /app/

COPY --from=deps /app/node_modules /app/node_modules
ADD package.json ./
RUN npm prune --production

# build app
FROM base as build

RUN mkdir /app/
WORKDIR /app/

COPY --from=deps /app/node_modules /app/node_modules

# Copy all source files and build
ADD . .
RUN npm run build

# build smaller image for running
FROM base

ENV PORT="3000"
ENV NODE_ENV="production"

RUN mkdir /app/
WORKDIR /app/

# Copy node_modules for production from production-deps stage
COPY --from=production-deps /app/node_modules /app/node_modules

# Copy built files from build stage
COPY --from=build /app/dist /app/dist
COPY package.json ./

# Expose port 3000
EXPOSE 3000

# Assuming the transpiled code is in a directory named "dist"
CMD ["npm", "start"]
