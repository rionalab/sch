"use server";

import { urls } from "@/consts";
import prisma from "@/libs/prisma";
import { revalidatePath } from "next/cache";
import { type FormFields } from "./type";
import { handlePrismaError } from "@/libs/helpers";
import { modelStoreVendor } from "./components/form/model";

const urlToRevalidate = urls.master.vendor.index;

export async function index() {
  return await prisma.vendor.findMany();
}

export async function store(data: FormFields) {
  try {
    let result;

    if (data.id != null) {
      result = await prisma.vendor.update({
        where: { id: Number(data.id) },
        data: await modelStoreVendor(data),
      });
    } else {
      result = await prisma.vendor.create({
        data: await modelStoreVendor(data),
      });
    }

    revalidatePath(urlToRevalidate);

    return { success: true, ...result };
  } catch (e: any) {
    handlePrismaError(e);
  }
}

export async function show(id: number) {
  return await prisma.vendor.findFirst({
    where: {
      id,
    },
  });
}

export async function destroy(id: number) {
  try {
    await prisma.vendor.softDelete({
      id,
    });
    revalidatePath(urlToRevalidate);
  } catch (e: any) {
    throw new Error(String(e?.message) ?? "");
  }
}
