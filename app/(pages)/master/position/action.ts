"use server";

import { urls } from "@/consts";
import prisma from "@/libs/prisma";
import { revalidatePath } from "next/cache";
import { type Store } from "./type";
import { type Prisma } from "@prisma/client";
import { handlePrismaError } from "@/libs/helpers";

const urlToRevalidate = urls.master.position.index;

export async function getPosition() {
  return await prisma.position.findMany();
}

export async function createPosition(data: Store) {
  try {
    let result;

    if (data.id != null) {
      result = await prisma.position.update({
        where: { id: Number(data.id) },
        data: data as Prisma.PositionCreateInput,
      });
    } else {
      result = await prisma.position.create({
        data: {
          name: data.name,
          category: data.category,
        },
      });
    }

    revalidatePath(urlToRevalidate);

    return { success: true, ...result };
  } catch (e: any) {
    handlePrismaError(e);
  }
}

export async function findPosition(id: string) {}

export async function removePosition(id: number) {
  try {
    await prisma.position.delete({
      where: { id },
    });
    revalidatePath(urlToRevalidate);
  } catch (e: any) {
    throw new Error(String(e?.message) ?? "");
  }
}
