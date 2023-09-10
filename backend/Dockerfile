# syntax = docker/dockerfile:1

# Adjust NODE_VERSION as desired
ARG NODE_VERSION=18.0.0
FROM node:${NODE_VERSION}-slim as base

LABEL fly_launch_runtime="Node.js"

# Node.js app lives here
WORKDIR /app

# Set production environment
ENV NODE_ENV="production"


# Throw-away build stage to reduce size of final image
FROM base as build

# Install packages needed to build node modules
RUN apt-get update -qq && \
    apt-get install -y build-essential pkg-config python

# Install node modules
COPY package-lock.json package.json ./
RUN npm ci

# Install TypeScript
RUN npm install -g typescript

# Copy application code
COPY . .

# Compile TypeScript to JavaScript
RUN tsc

# Final stage for app image
FROM base

# Copy built application
COPY --from=build /app /app

# Copy transpiled JavaScript code and other production files
# (assuming your tsconfig "outDir" is set to "dist")
COPY --from=build /app/build /app/build

# Start the server by default, this can be overwritten at runtime
EXPOSE 3000
CMD [ "node", "build/index.js" ]