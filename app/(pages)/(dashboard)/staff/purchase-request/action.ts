/* eslint-disable @typescript-eslint/return-await */
"use server";

import { urls } from "@/consts";
import prisma from "@/libs/prisma";
import { revalidatePath } from "next/cache";
import { type FormFields } from "./type";
import { handlePrismaError } from "@/libs/helpers";
import { modelStore } from "./components/form/model";
import { auth } from "@/app/api/auth/[...nextauth]/options";
import type { UserSession } from "@/types";

const urlToRevalidate = urls.staff.purchaseRequest.index;

export async function index() {
  const { user } = ((await auth()) ?? {}) as { user: UserSession };

  if (!user) {
    return [];
  }

  return await prisma.purchaseRequest.findMany({
    where: {
      requesterId: Number(user?.id),
    },
    include: {
      vendor: true,
      items: {
        include: {
          uom: true,
        },
      },
    },
  });
}

export async function store(data: FormFields) {
  try {
    let result;

    if (data.id != null) {
      result = await prisma.purchaseRequest.update({
        where: { id: Number(data.id) },
        data: modelStore(data),
      });
    } else {
      // result = await prisma.purchaseRequest.create({
      //   // data: modelStore(data),
      // });
    }

    revalidatePath(urlToRevalidate);

    return { success: true, ...result };
  } catch (e: any) {
    handlePrismaError(e);
  }
}
export async function show(id: number) {
  return await prisma.purchaseRequest.findFirst({
    where: {
      id,
    },
  });
}

export async function destroy(id: number) {
  try {
    await prisma.purchaseRequest.softDelete({
      id,
    });
    revalidatePath(urlToRevalidate);
  } catch (e: any) {
    throw new Error(String(e?.message) ?? "");
  }
}
