ARG NODE_VERSION=20

FROM node:${NODE_VERSION}
LABEL org.opencontainers.image.source https://github.com/eddiehubcommunity/CreatorsRegistry

WORKDIR /usr/src/app

COPY . .

RUN npm ci

EXPOSE 3000

CMD npm run db:prod:migrate && npm run build && npm run start
