"use server";

import prisma from "@/libs/prisma";
import { type StoreEmployee, type StoreEmployeeByCreate } from "./type";
import { urls } from "@/consts";
import { revalidatePath } from "next/cache";
import { handlePrismaError } from "@/libs/helpers";

const urlToRevalidate = urls.hrd.employee.index;

export async function index() {
  return await prisma.employee.findMany({
    include: {
      user: true,
      position: true,
    },
  });
}

export async function store(data: StoreEmployee | StoreEmployeeByCreate) {
  try {
    let result;

    if (data.id != null) {
      result = await prisma.employee.update({
        where: { id: Number(data.id) },
        data: data as any,
      });
    } else {
      const dataCreate = data as StoreEmployeeByCreate;

      result = await prisma.employee.create({
        data: {
          ...dataCreate,
          id: undefined,
          positionId: undefined,
          position: {
            connect: {
              id: dataCreate.positionId,
            },
          },
        },
      });
    }

    revalidatePath(urlToRevalidate);

    return { success: true, ...result };
  } catch (e: any) {
    handlePrismaError(e);
  }
}

export async function destroy(id: number) {
  try {
    await prisma.employee.delete({
      where: { id },
    });
    revalidatePath(urlToRevalidate);
  } catch (e: any) {
    handlePrismaError(e);
  }
}

export async function show(id: number) {
  return await prisma.employee.findFirst({
    where: {
      id,
    },
  });
}
