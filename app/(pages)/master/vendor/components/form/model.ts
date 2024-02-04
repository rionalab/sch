import { type Prisma } from "@prisma/client";

export function modelStoreVendor(formValue: Prisma.VendorCreateInput) {
  return {
    name: formValue.name,
    accountNo: formValue.accountNo,
    address: formValue.address,
    phone: formValue.phone,
    blacklist: formValue.blacklist,
    remarks: formValue.remarks,
  };
}
