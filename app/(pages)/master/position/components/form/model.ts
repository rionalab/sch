"use server";

import { type Prisma } from "@prisma/client";
import { type FormFields } from "../../type";
import prisma from "@/libs/prisma";
import { code } from "@/libs/helpers";

export async function modelStore(
  formValue: FormFields
): Promise<Prisma.PositionCreateInput> {
  const lastRow = await prisma.position.findFirst({
    orderBy: {
      id: "desc",
    },
  });

  const lastId = lastRow?.id ?? 1;

  return {
    name: formValue.name,
    code: code("POS", Number(lastId) + 1),
    category: formValue.category,
    description: formValue.description,
    active: formValue.active,
  };
}
