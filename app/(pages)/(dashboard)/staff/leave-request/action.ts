/* eslint-disable @typescript-eslint/return-await */
"use server";

import { urls } from "@/consts";
import prisma from "@/libs/prisma";
import { revalidatePath } from "next/cache";
import { type FormFields } from "./type";
import { handlePrismaError } from "@/libs/helpers";
import { modelStore } from "./components/form/model";

const urlToRevalidate = urls.staff.leaveRequest.index;

export async function index() {
  return await prisma.leaveRequest.findMany({
    where: {
      employeeId: Number(process.env.NEXT_PUBLIC_USER_DEMO_ID),
    },
    include: {
      leaveType: true,
    },
  });
}

export async function store(data: FormFields) {
  try {
    let result;

    if (data.id != null) {
      result = await prisma.leaveRequest.update({
        where: { id: Number(data.id) },
        data: modelStore(data),
      });
    } else {
      result = await prisma.leaveRequest.create({
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
  return await prisma.leaveRequest.findFirst({
    where: {
      id,
    },
  });
}

export async function destroy(id: number) {
  try {
    await prisma.leaveRequest.delete({
      where: { id },
    });
    revalidatePath(urlToRevalidate);
  } catch (e: any) {
    throw new Error(String(e?.message) ?? "");
  }
}
