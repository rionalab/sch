"use server";

import { urls } from "@/consts";
import { handlePrismaError } from "@/libs/helpers";
import prisma from "@/libs/prisma";
import { revalidatePath } from "next/cache";

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

export async function store() {
  try {
    revalidatePath(urlToRevalidate);
    return { success: true };
    // return { success: true, ...result };
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
