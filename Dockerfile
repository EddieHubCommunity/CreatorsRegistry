ARG NODE_VERSION=20
FROM node:${NODE_VERSION} as builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npx prisma generate
RUN npm run build

# Production image, copy all the files and run next
FROM node:${NODE_VERSION} as production
LABEL org.opencontainers.image.source https://github.com/eddiehubcommunity/CreatorsRegistry

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app .

EXPOSE 3000

CMD npm run db:prod:migrate && npm run start