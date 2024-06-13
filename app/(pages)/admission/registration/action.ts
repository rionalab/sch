"use server";

import { urls } from "@/consts";
import { handlePrismaError } from "@/libs/helpers";
import prisma from "@/libs/prisma";
import { revalidatePath } from "next/cache";
import { FormParentType } from "./type";

const urlToRevalidate = urls.hrd.employee.index;

export async function index() {
  return await prisma.employee.findMany({
    include: {
      user: true,
      position: true,
    },
  });
}

export async function allowRegister(id: number, status = true) {
  try {
    await prisma.userAdmission.update({
      where: { id: Number(id) },
      data: {
        allowAdmission: status,
      },
    });
  } catch (e: any) {
    console.log(e.message);
  }
}

export async function isAllowSubmitAdmission(id: number) {
  const user = await prisma.userAdmission.findFirst({
    where: {
      id,
    },
  });

  return user?.allowAdmission;
}

export async function store({
  data1,
  data2,
  data3,
  data4,
}: {
  data1: any;
  data2: any;
  data3: any;
  data4: any;
}) {
  try {
    const result = {};

    await prisma.studentRegistrationChildren.create({
      data: {
        data: data1 || " ",
        status: "new",
        StudentRegistrationParent: {
          create: {
            data: data2 || " ",
          },
        },
        StudentRegistrationActivities: {
          create: {
            data: data3 || " ",
          },
        },
        StudentRegistrationInformation: {
          create: {
            data: data4 || " ",
          },
        },
        paymentCode: "AAAA",
        method: "Online",
      },
    });

    // if (data.id != null) {
    //   result = await prisma.employee.update({
    //     where: { id: Number(data.id) },
    //     data: data as any,
    //   });
    // } else {
    //   const dataCreate = data as StoreEmployeeByCreate;

    //   result = await prisma.employee.create({
    //     data: {
    //       ...dataCreate,
    //       id: undefined,
    //       positionId: undefined,
    //       position: {
    //         connect: {
    //           id: dataCreate.positionId,
    //         },
    //       },
    //     },
    //   });
    // }

    // revalidatePath(urlToRevalidate);

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

export async function showParentData(parentId: number) {
  try {
    return await prisma.parentData.findFirst({
      where: {
        parentId,
      },
    });
  } catch (e: any) {
    handlePrismaError(e);
  }
}

export async function storeParentData(
  parentId: number,
  data: string,
  idEdit?: number,
) {
  try {
    const result = {};

    const checkExist = await prisma.parentData.findFirst({
      where: {
        parentId,
      },
    });

    if (!checkExist) {
      const parentData = await prisma.parentData.create({
        data: {
          data,
          parentId,
        },
      });

      await prisma.userAdmission.update({
        where: { id: parentId },
        data: {
          parentDataId: parentData.id,
        },
      });
    } else {
      const parentData = await prisma.parentData.update({
        where: {
          id: idEdit,
        },
        data,
      });
    }

    return { success: true, ...result };
  } catch (e: any) {
    handlePrismaError(e);
  }
}
