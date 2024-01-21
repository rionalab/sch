"use server";

import prisma from "@/libs/prisma";

export async function index() {
  return await prisma.position.findMany();
}

export async function prismaIsExist(
  table: prisma.ModelName,
  where: prisma.whereInput
) {
  try {
    const result = await prisma[table].findFirst({
      where,
    });

    return Boolean(result);
  } catch (e: any) {
    throw new Error(e.message);
  }
}
