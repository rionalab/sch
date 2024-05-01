"use server";

import { urls } from "@/consts";
import { handlePrismaError, randomString } from "@/libs/helpers";
import prisma from "@/libs/prisma";
import { revalidatePath } from "next/cache";

const urlToRevalidate = urls.admission.forms;

export async function index() {
  return await prisma.documents.findMany({
    where: {
      type: "parent",
    },
  });
}

export async function buyForm(documentId: number, parentId: number) {
  try {
    const data = {
      parentId,
      documentId,
      code: randomString(8),
    };

    console.log(data);

    const result = await prisma.parentForm.create({
      data,
    });

    console.log(result, parentId, documentId);
  } catch (e: any) {
    handlePrismaError(e);
  }
}

export async function allowRegister(id: number, status = true) {
  try {
    const result = await prisma.userAdmission.update({
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
    let result = {};

    // const a = await prisma.studentRegistrationChildren.create({
    //   data: {
    //     data: data1 || " ",
    //     status: "new",
    //     StudentRegistrationParent: {
    //       create: {
    //         data: data2 || " ",
    //       },
    //     },
    //     StudentRegistrationActivities: {
    //       create: {
    //         data: data3 || " ",
    //       },
    //     },
    //     StudentRegistrationInformation: {
    //       create: {
    //         data: data4 || " ",
    //       },
    //     },
    //   },
    // });

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
  return await prisma.documents.findFirst({
    where: {
      id,
    },
  });
}
