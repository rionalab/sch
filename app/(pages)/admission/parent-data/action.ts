"use server";

import { urls } from "@/consts";
import { handlePrismaError } from "@/libs/helpers";
import prisma from "@/libs/prisma";
import { revalidatePath } from "next/cache";

export const update = async (id: any, data: any) => {
  try {
    const result = await prisma.parentData.update({
      where: {
        id,
      },
      data: {
        data,
      },
    });

    revalidatePath(urls.admission.parentData);
  } catch (e) {
    handlePrismaError(e);
  }
};

export const newParentData = async (parentId: any, data: any) => {
  const parentData = await prisma.parentData.create({
    data: {
      data,
      parentId,
    },
  });

  await prisma.userAdmission.update({
    where: { id: parentId },
    data: {
      parentDataId: parentData.id,
    },
  });
};
