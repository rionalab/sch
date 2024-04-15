import { code } from "@/libs/helpers";
import prisma from "@/libs/prisma";
import { type Prisma } from "@prisma/client";
import { type FormFields } from "../../type";

export async function modelStore(
  formValue: FormFields,
): Promise<Prisma.DepartmentCreateInput> {
  const lastRow = await prisma.department.findFirst({
    orderBy: {
      id: "desc",
    },
  });

  const lastId = lastRow?.id ?? 1;

  return {
    name: formValue.name,
    description: formValue.description,
    active: formValue.active,
    budget: formValue.budget,
    code: formValue.id ? formValue.code : code("DPT", Number(lastId) + 1),
  };
}
