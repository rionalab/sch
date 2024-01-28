"use server";

import prisma from "@/libs/prisma";
import { type StoreEmployee, type StoreEmployeeByCreate } from "./type";
import { messages, urls } from "@/consts";
import { revalidatePath } from "next/cache";
import { handlePrismaError } from "@/libs/helpers";

const urlToRevalidate = urls.hrd.employee.index;

export async function initData() {
  const teacher = await prisma.teacher.create({
    data: {
      firstName: "Placeholder",
      lastName: "Teacher",
      email: "placeholder2@example.com",
    },
  });

  console.log("Placeholder Teacher created:", teacher);

  const course = await prisma.course.create({
    data: {
      title: "Placeholder Course",
      description: "Placeholder Description",
      teacher: {
        connect: { id: teacher.id },
      },
    },
  });
  console.log(
    "Placeholder Course created and associated with Teacher:",
    course
  );
}

export async function getEmployee() {
  return await prisma.employee.findMany({
    include: {
      user: true,
      position: true,
    },
  });
}

export async function createEmployee(
  data: StoreEmployee | StoreEmployeeByCreate
) {
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
