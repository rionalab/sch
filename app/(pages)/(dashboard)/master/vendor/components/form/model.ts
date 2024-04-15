import { type Prisma } from "@prisma/client";
import { type FormFields } from "../../type";
import prisma from "@/libs/prisma";
import { code } from "@/libs/helpers";

export async function modelStoreVendor(
  formValue: FormFields,
): Promise<Prisma.VendorCreateInput> {
  const lastRow = await prisma.vendor.findFirst({
    orderBy: {
      id: "desc",
    },
  });

  const lastId = lastRow?.id ?? 1;

  return {
    code: formValue.id ? formValue.code : code("SPP", Number(lastId) + 1),
    name: formValue.name,
    accountNo: formValue.accountNo,
    address: formValue.address,
    phone: formValue.phone,
    fax: formValue.fax,
    blacklist: formValue.blacklist,
    remarks: formValue.remarks,
  };
}
