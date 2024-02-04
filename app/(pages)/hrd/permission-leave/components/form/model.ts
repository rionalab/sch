import { type Prisma } from "@prisma/client";
import { type FormFields } from "../../type";

export function modelStore(formValue: FormFields): Prisma.WorkUnitCreateInput {
  return {
    name: formValue.name,
    description: formValue.description,
    status: formValue.status,
  };
}
