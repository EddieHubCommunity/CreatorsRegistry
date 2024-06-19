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

1. copy `.env.example` to `.env` and fill out parameters
   - For LinkedIn parameters create a developer app here https://developer.linkedin.com

<details>
    <summary>LinkedIn OAuth Details</summary>    
    <img alt="LinkedIn OAuth screenshot of settings" src="https://github.com/EddieHubCommunity/CreatorsRegistry/assets/624760/c61a50eb-363e-4dcb-b208-405e256f7238">
</details>

2. Install the dependencies `npm ci` from the package lock file (do not use `npm install` unless for a specific reason)
3. Create the database tables `prisma migrate dev`
4. Seed the database by inserting example data `db:dev:seed`
5. Start the local dev server `npm run dev`

### Run Postgres using docker 

#### Requirement 
- Must have docker installed 
```bash
docker-compose up -d
``` 

## Join the EddieHub community

Discord http://discord.eddiehub.org
