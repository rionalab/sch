"use server";

import { urls } from "@/consts";
import prisma from "@/libs/prisma";
import { revalidatePath } from "next/cache";
import { type FormFields } from "./type";
import { handlePrismaError } from "@/libs/helpers";
import { modelStore } from "./components/form/model";

const urlToRevalidate = urls.master.uom.index;

export async function index() {
  return await prisma.uom.findMany();
}

export async function store(data: FormFields) {
  try {
    let result;

    if (data.id != null) {
      result = await prisma.uom.update({
        where: { id: Number(data.id) },
        data: modelStore(data),
      });
    } else {
      result = await prisma.uom.create({
        data: modelStore(data),
      });
    }

    revalidatePath(urlToRevalidate);

    return { success: true, ...result };
  } catch (e: any) {
    handlePrismaError(e);
  }
}

export async function show(id: number) {
  return await prisma.uom.findFirst({
    where: {
      id,
    },
  });
}

export async function destroy(id: number) {
  try {
    await prisma.uom.softDelete({
      id,
    });
    revalidatePath(urlToRevalidate);
  } catch (e: any) {
    throw new Error(String(e?.message) ?? "");
  }
}
