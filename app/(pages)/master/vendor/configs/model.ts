import { type Prisma } from "@prisma/client";

export function modelStoreVendor(formValue: Prisma.VendorCreateInput) {
  return {
   name: 'string';
   accountNo: string;
   address: string;
   phone: string;
   blacklist: boolean;
   remarks?: string;
  };
}
