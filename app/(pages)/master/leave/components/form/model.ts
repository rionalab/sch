import { type Prisma } from "@prisma/client";
import { type FormFields } from "../../type";

export function modelStore(formValue: FormFields): Prisma.LeaveTypeCreateInput {
  return {
    name: formValue.name,
    description: formValue.description,
  };
}
