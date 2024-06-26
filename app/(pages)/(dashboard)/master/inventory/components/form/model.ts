import { code } from "@/libs/helpers";
import prisma from "@/libs/prisma";
import { type Prisma } from "@prisma/client";
import { type FormFields } from "../../type";

export async function modelStore(
  formValue: FormFields,
): Promise<Prisma.InventoryCreateInput> {
  const lastRow = await prisma.inventory.findFirst({
    orderBy: {
      id: "desc",
    },
  });

  const lastId = lastRow?.id ?? 1;

  return {
    name: formValue.name,
    code: formValue.id ? formValue.code : code("INV", Number(lastId) + 1),
    UOM: {
      connect: {
        id: Number(formValue.uomId),
      },
    },
    remarks: formValue.remarks,
    category: formValue.category,
    owner: {
      connect: {
        id: Number(formValue.departmentId),
      },
    },
  };
}
