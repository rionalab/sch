import { type Prisma } from "@prisma/client";
import { type FormFields } from "../../type";

export function modelStore(formValue: FormFields): Prisma.WorkUnitCreateInput {
  return {
    code: formValue.code,
    name: formValue.name,
    description: formValue.description,
    status: formValue.status,
  };
}
