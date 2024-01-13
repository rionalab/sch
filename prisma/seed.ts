import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);

  const province = await prisma.province.create({
    data: [
      {
        name: "Sumatera Utara",
      },
      {
        name: "Sumatera Barat",
      },
    ],
  });

  console.log(province);

  // const city = await prisma.city.create({
  //   data: {
  //     name: "Medan",
  //     state: {
  //       connect: { id: province.id },
  //     },
  //   },
  // });

  // const position = await prisma.position.create({
  //   data: {
  //     roleName: "Teacher",
  //     category: "Edu",
  //   },
  // });

  // await prisma.employee.create({
  //   data: {
  //     firstName: "John",
  //     lastName: "Doe",
  //     religion: "Kristen",
  //     photo: "",
  //     userId: 0,
  //     bloodType: "O",
  //     email: "orlando@mail.com",
  //     phone1: "0821299888",
  //     phone2: "0821299889",
  //     familyPhone: "0821291889",
  //     address: "Jl Merdeka No 99 Medan Marelan",
  //     city: {
  //       connect: { id: city.id },
  //     },
  //     province: {
  //       connect: { id: province.id },
  //     },
  //     position: {
  //       connect: { id: position.id },
  //     },
  //     zipCode: 445202,
  //     tribe: "Batak",
  //     remarks: "Somethign over the rainbow",
  //     gender: "Male",
  //     hireDate: "2022-01-13T14:30:00.000Z",
  //     dob: "2022-01-13T14:30:00.000Z",
  //     placeOfBirth: "Medan",
  //   },
  // });

  console.log(`Seeding finished.`);
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
