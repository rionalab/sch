import { type Prisma } from "@prisma/client";

export function modelStore(formValue: Prisma.DepartmentCreateInput) {
  return {
    name: formValue.name,
  };
}
