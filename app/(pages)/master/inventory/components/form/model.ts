import { type Prisma } from "@prisma/client";
import { type FormFields } from "../../type";

export function modelStore(formValue: FormFields): Prisma.InventoryCreateInput {
  return {
    name: formValue.name,
    code: formValue.name,
    UOM: formValue.name,
    remarks: formValue.remarks,
    owner: {
      connect: {
        id: formValue.departmentId,
      },
    },
  };
}
