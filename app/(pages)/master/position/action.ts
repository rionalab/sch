"use server";

import { urls, messages } from "@/consts";
import prisma from "@/libs/prisma";
import { update } from "@/libs/prisma/prismaClient";
import { revalidatePath } from "next/cache";
import { Store } from "./type";

const urlToRevalidate = urls.master.position.index;

export async function getPosition() {
  return await prisma.position.findMany();
}

export async function createPosition(data: Store) {
  try {
    let result;

    if (data.id) {
      result = update({
        model: "position",
        data,
      });
    } else {
      const isExist = await prisma.position.findFirst({
        where: { name: data.name },
      });

      if (isExist) {
        throw new Error(messages.dataAlreadyExist);
      }

      result = await prisma.position.create({
        data: {
          name: data.name,
          category: data.category,
        },
      });
    }

    revalidatePath(urlToRevalidate);

    return "{ success: true, ...result }";
  } catch (e: any) {
    throw new Error(e?.message ?? "");
  }
}

export async function findPosition(id: string) {
  // position
}

export async function removePosition(id: number) {
  try {
    await prisma.position.delete({
      where: { id },
    });
    revalidatePath(urlToRevalidate);
  } catch (e: any) {
    throw new Error(e?.message ?? "");
  }
}
