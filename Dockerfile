ARG NODE_VERSION=20

FROM node:${NODE_VERSION}
LABEL org.opencontainers.image.source https://github.com/eddiehubcommunity/ContentRegistry

WORKDIR /usr/src/app

COPY . .

RUN npm ci

EXPOSE 3000

CMD ["sh", "-c", "cp .env.example .env && npm run db:prod:migrate && npm run build"]
