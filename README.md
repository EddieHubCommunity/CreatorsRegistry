# <img src="./public/logo.svg" width=35> Creators Registry

A place for Creators to get paid for their content 💰. Companies don't only look for big influencers but also micro influencers. Join the platform and let them find you!

## Getting Started

All contributions welcome, not just code.

### Technologies

- NextJS (AppRouter)
- Prisma
- Postgres
- LinkedIn OAuth

### Requirements

- NodeJS
- Postgres
- LinkedIn OAuth

### Local development

1. Copy `.env.example` to `.env` and fill out the parameters.
   - For LinkedIn parameters, create a developer app [here](https://developer.linkedin.com).

| ENVIRONMENT VARIABLE   | EXAMPLE VALUE                                                          | DESCRIPTION                                 |
| :--------------------- | :--------------------------------------------------------------------- | :------------------------------------------ |
| DATABASE_URL           | postgresql://postgres:password@localhost:5432/contentcreator?schema=public | Connection url to your Postgres database    |
| NEXTAUTH_URL           | http://localhost:3000                                                  | Url to your app                             |
| NEXTAUTH_SECRET        | abcdefg                                                                | Random string                               |
| LINKEDIN_CLIENT_ID     | abcd1234efgh5678                                                       | This is generated by the LinkedIn OAuth app |
| LINKEDIN_CLIENT_SECRET | WER.asdflkjlkj234ljljjhg.asdf324jhghjg==                               | This is generated by the LinkedIn OAuth app |


<details>
    <summary>LinkedIn OAuth Details (click to expand)</summary>
    Authorized redirect URLs for your app <code>http://localhost:3000/api/auth/callback/linkedin</code>
    <img alt="LinkedIn OAuth screenshot of settings" src="https://github.com/EddieHubCommunity/CreatorsRegistry/assets/624760/c61a50eb-363e-4dcb-b208-405e256f7238">
</details>
J
2. Install the dependencies `npm ci` from the package lock file (do not use `npm install` unless for a specific reason)
3. Create the database tables `prisma migrate dev`
4. Seed the database by inserting example data `db:dev:seed`
5. Start the local dev server `npm run dev`

### Postgres using Docker Compose

Note: you must have docker installed 

Run the docker command `docker-compose up -d`

## Join the EddieHub community

Discord http://discord.eddiehub.org
