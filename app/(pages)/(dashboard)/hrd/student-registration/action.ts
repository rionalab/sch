// @ts-nocheck

"use server";

import { urls } from "@/consts";
import { handlePrismaError } from "@/libs/helpers";
import prisma from "@/libs/prisma";
import { revalidatePath } from "next/cache";
import { type StoreEmployee, type StoreEmployeeByCreate } from "./type";

const urlToRevalidate = urls.admissionOfficer.admission.index;

export async function index() {
  return await prisma.studentRegistrationChildren.findMany({
    include: {
      StudentRegistrationActivities: true,
      StudentRegistrationInformation: true,
      StudentRegistrationParent: true,
    },
  });
}

export async function store(data: StoreEmployee | StoreEmployeeByCreate) {
  try {
    let result;

    if (data.id != null) {
      result = await prisma.employee.update({
        where: { id: Number(data.id) },
        data,
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
    await prisma.employee.softDelete({
      id,
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
