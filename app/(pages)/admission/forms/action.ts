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

export async function owned(parentId: number) {
  return await prisma.parentForm.findMany({
    where: {
      parentId,
    },
  });
}

export async function ownedByFormId(documentId: number, parentId: number) {
  return await prisma.parentForm.findMany({
    where: {
      parentId,
      documentId,
    },
  });
}

export async function isUserHasForm(documentId: number, parentId: number) {
  const docs = await prisma.parentForm.findMany({
    where: {
      parentId,
      documentId,
    },
  });

  return Boolean(docs.length);
}

export async function buyForm(
  documentId: number,
  parentId: number,
  price: number,
) {
  try {
    const data = {
      parentId,
      documentId,
      price,
      code: randomString(8),
    };

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
