import type { Prisma } from "@prisma/client";
import { type FormFields } from "../../type";

export async function modelStore(
  formValue: FormFields,
): Promise<Prisma.RoleActionCreateInput> {
  return {
    name: formValue.name,
    label: formValue.label,
    actions: formValue.actions,
    description: formValue.description,
  };
}
