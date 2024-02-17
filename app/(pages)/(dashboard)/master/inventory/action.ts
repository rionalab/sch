"use server";

import { urls } from "@/consts";
import prisma from "@/libs/prisma";
import { revalidatePath } from "next/cache";
import { type FormFields } from "./type";
import { handlePrismaError } from "@/libs/helpers";
import { modelStore } from "./components/form/model";

const urlToRevalidate = urls.master.inventory.index;

export async function index() {
  return await prisma.inventory.findMany({
    include: {
      owner: true,
      UOM: true,
    },
  });
}

export async function store(data: FormFields) {
  try {
    let result;

    if (data.id != null) {
      result = await prisma.inventory.update({
        where: { id: Number(data.id) },
        data: await modelStore(data),
      });
    } else {
      result = await prisma.inventory.create({
        data: await modelStore(data),
      });
    }

    revalidatePath(urlToRevalidate);

    return { success: true, ...result };
  } catch (e: any) {
    handlePrismaError(e);
  }
}

export async function get(id: number) {
  return await prisma.inventory.findFirst({
    where: {
      id,
    },
  });
}

export async function destroy(id: number) {
  try {
    await prisma.inventory.delete({
      where: { id },
    });
    revalidatePath(urlToRevalidate);
  } catch (e: any) {
    throw new Error(String(e?.message) ?? "");
  }
}
