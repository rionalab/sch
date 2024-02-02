import { faker } from "@faker-js/faker";
import { type Prisma } from "@prisma/client";

export const vendorSeed: Prisma.VendorCreateInput[] = [
  {
    name: "Vendor1",
    accountNo: "1111111111",
    address: faker.location.streetAddress(),
    phone: faker.phone.number(),
    remarks: "",
    blacklist: false,
  },
];
