import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { employeeSeed } from "./employee";

const prisma = new PrismaClient();
const today = new Date().toISOString();

async function main() {
  console.log(`Start seeding ...`);

  // cleaning
  await prisma.employee.deleteMany();

  // * User
  // *************************************
  await prisma.user.createMany({
    data: [
      {
        email: "user1@mail.com",
      },
      {
        email: "user2@mail.com",
      },
      {
        email: "user3@mail.com",
      },
      {
        email: "user4@mail.com",
      },
      {
        email: "user5@mail.com",
      },
    ],
    skipDuplicates: true,
  });
  const users = (await prisma.user.findMany()).map((item) => item.id);

  // * Position
  // *************************************
  await prisma.position.createMany({
    data: [
      {
        name: "principal",
        category: "Edu",
      },
      {
        name: "teacher",
        category: "Edu",
      },
      {
        name: "security",
        category: "NonEdu",
      },
      {
        name: "cleaning",
        category: "NonEdu",
      },
    ],
    skipDuplicates: true,
  });
  const positions = (await prisma.position.findMany()).map((item) => item.id);

  // * Employee
  // *************************************
  await prisma.employee.createMany({
    data: employeeSeed.map((row) => ({
      PKWTEnd: today,
      zipCode: faker.location.zipCode(),
      // @ts-ignore
      positionId: faker.helpers.arrayElement(positions),
      userId: faker.helpers.arrayElement(users),
      ...row,
      gender: row.gender,
    })),

    skipDuplicates: true,
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
