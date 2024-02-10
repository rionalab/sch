import { type Prisma } from "@prisma/client";
import { type FormFields } from "../../type";

export function modelStore(
  formValue: FormFields
): Prisma.ExtracurricularCreateInput {
  return {
    name: formValue.name,
    description: formValue.description,
    code: formValue.code,
    active: formValue.active,
    paid: formValue.paid,
    price: Number(formValue?.price ?? 0) || 0,
  };
}
