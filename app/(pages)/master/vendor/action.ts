"use server";

import { urls } from "@/consts";
import prisma from "@/libs/prisma";
import { revalidatePath } from "next/cache";
import { VendorFields, type Store } from "./type";
import { type Prisma } from "@prisma/client";
import { handlePrismaError } from "@/libs/helpers";
import { modelStoreVendor } from "./configs/model";

const urlToRevalidate = urls.master.vendor.index;

export async function getVendor() {
  return await prisma.vendor.findMany();
}

export async function createVendor(data: VendorFields) {
  try {
    let result;

    if (data.id != null) {
      result = await prisma.vendor.update({
        where: { id: Number(data.id) },
        data: data as Prisma.vendorCreateInput,
      });
    } else {
      result = await prisma.vendor.create({
        data: modelStoreVendor(data),
      });
    }

    revalidatePath(urlToRevalidate);

    return { success: true, ...result };
  } catch (e: any) {
    handlePrismaError(e);
  }
}

export async function findVendor(id: number) {
  return await prisma.vendor.findFirst({
    where: {
      id,
    },
  });
}

export async function removeVendor(id: number) {
  try {
    await prisma.vendor.delete({
      where: { id },
    });
    revalidatePath(urlToRevalidate);
  } catch (e: any) {
    throw new Error(String(e?.message) ?? "");
  }
}
