"use server";

import { urls } from "@/consts";
import { handlePrismaError } from "@/libs/helpers";
import prisma from "@/libs/prisma";
import { revalidatePath } from "next/cache";
import { modelStore } from "./components/form/model";
import { type FormFields } from "./type";

const urlToRevalidate = urls.marketing.form.index;

export async function index() {
  return await prisma.documents.findMany();
}

export async function store(data: FormFields) {
  try {
    let result;

    if (data.id != null) {
      result = await prisma.documents.update({
        where: { id: Number(data.id) },
        data: modelStore(data),
      });
    } else {
      result = await prisma.documents.create({
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
  return await prisma.documents.findFirst({
    where: {
      id,
    },
  });
}

export async function destroy(id: number) {
  try {
    await prisma.documents.softDelete({
      id,
    });
    revalidatePath(urlToRevalidate);
  } catch (e: any) {
    throw new Error(String(e?.message) ?? "");
  }
}
