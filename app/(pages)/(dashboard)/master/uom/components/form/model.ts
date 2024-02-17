import { type Prisma } from "@prisma/client";
import { type FormFields } from "../../type";

export function modelStore(formValue: FormFields): Prisma.UomCreateInput {
  return {
    name: formValue.name,
    code: formValue.name,
    acronym: formValue.acronym,
    active: formValue.active,
    description: formValue.description,
  };
}
