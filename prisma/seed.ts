import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

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
    data: Array.from({ length: 5 }).map(() => ({
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      religion: faker.helpers.arrayElement([
        "Islam",
        "Budha",
        "Hindu",
        "Kristen",
        "Katolik",
        "Khonghucu",
        "Tradisional",
      ]),
      photo: faker.image.avatar(),
      bloodType: "O",
      email: faker.internet.email(),
      phone1: faker.phone.number(),
      phone2: faker.phone.number(),
      familyPhone: faker.phone.number(),
      address: faker.location.streetAddress(),
      zipCode: faker.location.zipCode(),
      tribe: "Batak",
      remarks: faker.lorem.sentence(7),
      gender: faker.helpers.arrayElement(["Female", "Male"]),
      hireDate: faker.date.anytime(),
      dob: today,
      placeOfBirth: faker.location.city(),
      positionId: faker.helpers.arrayElement(positions),
      userId: faker.helpers.arrayElement(users),
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
