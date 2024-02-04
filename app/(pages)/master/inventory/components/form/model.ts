import { type Prisma } from "@prisma/client";
import { type FormFields } from "../../type";

export function modelStore(formValue: FormFields): Prisma.InventoryCreateInput {
  return {
    name: formValue.name,
    code: formValue.code,
    UOM: formValue.UOM,
    remarks: formValue.remarks,
    category: formValue.category,
    owner: {
      connect: {
        id: formValue.departmentId,
      },
    },
  };
}
