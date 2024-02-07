"use server";

import { type Prisma } from "@prisma/client";
import { type FormFields } from "../../type";
import prisma from "@/libs/prisma";
import { code } from "@/libs/helpers";

export async function modelStore(
  formValue: FormFields
): Promise<Prisma.PositionCreateInput> {
  const count = await prisma.position.count();

  return {
    name: formValue.name,
    code: code("POS", count + 1),
    category: formValue.category,
    description: formValue.description,
    active: formValue.active,
  };
}
