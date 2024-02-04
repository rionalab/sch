"use server";

import { urls } from "@/consts";
import prisma from "@/libs/prisma";
import { revalidatePath } from "next/cache";
import { type FormFields } from "./type";
import { handlePrismaError } from "@/libs/helpers";
import { modelStore } from "./components/form/model";

const urlToRevalidate = urls.master.leave.index;

export async function index() {
  return prisma.leaveType.findMany();
}

export async function store(data: FormFields) {
  try {
    let result;

    if (data.id != null) {
      result = await prisma.leaveType.update({
        where: { id: Number(data.id) },
        data: modelStore(data),
      });
    } else {
      result = await prisma.leaveType.create({
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
  return prisma.leaveType.findFirst({
    where: {
      id,
    },
  });
}

export async function destroy(id: number) {
  try {
    await prisma.leaveType.delete({
      where: { id },
    });
    revalidatePath(urlToRevalidate);
  } catch (e: any) {
    throw new Error(String(e?.message) ?? "");
  }
}
