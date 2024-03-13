"use server";

import prisma from "@/libs/prisma";
import { revalidatePath } from "next/cache";
import { type FormFields } from "./type";
import { handlePrismaError } from "@/libs/helpers";
import { modelStore } from "./components/form/model";
import { urls } from "@/consts";

const model = prisma.roleAction;
const urlToRevalidate = urls.superadmin.role.index;

export async function index() {
  return await model.findMany();
}

export async function store(data: FormFields) {
  try {
    let result;

    if (data.id != null) {
      result = await model.update({
        where: { id: Number(data.id) },
        data: await modelStore(data),
      });
    } else {
      result = await model.create({
        data: await modelStore(data),
      });
    }

    revalidatePath(urlToRevalidate);

    return { success: true, ...result };
  } catch (e: any) {
    handlePrismaError(e);
  }
}

export async function show(id: number) {
  return await model.findFirst({
    where: {
      id,
    },
  });
}

export async function destroy(id: number) {
  try {
    await model.softDelete({
      id,
    });
    revalidatePath(urlToRevalidate);
  } catch (e: any) {
    throw new Error(String(e?.message) ?? "");
  }
}
