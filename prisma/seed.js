const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const {
  randFullName,
  randAvatar,
  randNumber,
  randUserName,
  randSocial,
  randUrl,
  randTextRange,
  rand,
} = require("@ngneat/falso");

const config = require("../src/config/app.json");

const emails = [1, 2, 3, 4, 5, 6].map((no) => `test${no}@test.com`);

async function main() {
  emails.map(async (email) => {
    const data = {
      email,
      username: randUserName(),
      name: randFullName(),
      image: `${randAvatar()}?${Math.random()}}`,
      website: randUrl(),
      bio: randTextRange({ min: 10, max: 250 }),
      platforms: {
        createMany: {
          data: Array.from({ length: Math.floor(Math.random() * 6) }).map(
            () => ({
              name: rand(
                Object.values(config.platforms).map(
                  (platform) => platform.value
                )
              ),
              reach: rand(
                Object.values(config.reach).map((item) => item.value)
              ),
              price: randNumber(),
              url: randSocial().link,
              example: randUrl(),
              description: randTextRange({ min: 30, max: 250 }),
            })
          ),
        },
      },
    };
    await prisma.user.upsert({
      where: { email },
      update: data,
      create: data,
    });
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
