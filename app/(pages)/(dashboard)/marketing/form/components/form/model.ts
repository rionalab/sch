import { type Prisma } from "@prisma/client";
import { type FormFields } from "../../type";

export function modelStore(formValue: FormFields): Prisma.DocumentsCreateInput {
  return {
    name: formValue.name,
    active: formValue.active,
    type: formValue.type,
    price: Number(formValue.price ?? 0),
    isPaid: formValue.isPaid === "paid",
    fileName: formValue?.fileName ?? "",
    remarks: formValue.remarks ?? "",
  };
}
