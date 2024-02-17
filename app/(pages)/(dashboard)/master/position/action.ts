"use server";

import { urls } from "@/consts";
import prisma from "@/libs/prisma";
import { revalidatePath } from "next/cache";
import { type Prisma } from "@prisma/client";
import { handlePrismaError } from "@/libs/helpers";
import { type FormFields } from "./type";
import { modelStore } from "./components/form/model";

const urlToRevalidate = urls.master.position.index;

export async function index() {
  return await prisma.position.findMany();
}

export async function store(data: FormFields) {
  try {
    let result;

    if (data.id != null) {
      result = await prisma.position.update({
        where: { id: Number(data.id) },
        data: data as Prisma.PositionCreateInput,
      });
    } else {
      const dataModel = await modelStore(data);

      result = await prisma.position.create({
        data: dataModel,
      });
    }

    revalidatePath(urlToRevalidate);

    return { success: true, ...result };
  } catch (e: any) {
    handlePrismaError(e);
  }
}

export async function show(id: number) {
  return await prisma.position.findFirst({
    where: {
      id,
    },
  });
}

export async function destroy(id: number) {
  try {
    await prisma.position.softDelete({
      id,
    });
    revalidatePath(urlToRevalidate);
  } catch (e: any) {
    throw new Error(String(e?.message) ?? "");
  }
}
