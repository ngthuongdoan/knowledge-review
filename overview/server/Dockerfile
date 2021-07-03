FROM node:alpine as base

LABEL "author"="ngthuongdoan"
LABEL "author.email"="ngthuongdoan@gmail.com"
LABEL "description"="This is a server for my todo app"

RUN mkdir /usr/node-server && chown -R node:node /usr/node-server

WORKDIR /usr/node-server

COPY package.json yarn.lock ./
RUN yarn install --pure-lockfile

# Copy static files
COPY /dist /dist ./
# Copy static files
# COPY src/public dist/src/public

USER node
COPY --chown=node:node . .

EXPOSE 3000
# CMD ["dist/src/index.js"]