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

<details>
    <summary>LinkedIn OAuth Details</summary>    
    <img alt="LinkedIn OAuth screenshot of settings" src="https://github.com/EddieHubCommunity/CreatorsRegistry/assets/624760/c61a50eb-363e-4dcb-b208-405e256f7238">
</details>

2. Install the dependencies using `npm ci` from the package lock file (do not use `npm install` unless for a specific reason).
3. Ensure your Postgres server is running on `localhost:5432` with the default username and `POSTGRES_PASSWORD` set as `password`.
4. Create the database tables by running `npm run db:dev:migrate` (for production, use `npm run db:prod:migrate`).
5. Seed the database by inserting example data with `npm run db:dev:seed` (if you need to reset the database, use `npm run db:dev:reset`).
6. Start the local development server with `npm run dev`.

## Join the EddieHub community

Discord http://discord.eddiehub.org
