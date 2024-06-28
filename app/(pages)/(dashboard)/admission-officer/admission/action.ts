"use server";

import { urls } from "@/consts";
import { handlePrismaError } from "@/libs/helpers";
import prisma from "@/libs/prisma";
import { AdmissionPhase } from "@/types";
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

export async function indexByParent(userId: number) {
  let result = await prisma.studentRegistrationChildren.findMany({
    where: {
      userId,
    },
    include: {
      StudentRegistrationActivities: true,
      StudentRegistrationInformation: true,
      StudentRegistrationParent: true,
    },
  });

  const parent = await prisma.parentData.findFirst({
    where: {
      parentId: userId,
    },
  });

  return result.map((row) => {
    return { ...row, parentData: JSON.parse(parent?.data ?? "{}") };
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
    await prisma.studentRegistrationChildren.softDelete({
      id,
    });
    revalidatePath(urls.admission.childrenData);
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

export async function approve(id: number) {
  try {
    await prisma.studentRegistrationChildren.update({
      data: {
        status: "approved",
      },
      where: {
        id,
      },
    });
    revalidatePath(urlToRevalidate);
  } catch (e: any) {
    handlePrismaError(e);
  }
}

export async function updateAdmissionPhase(
  id: number,
  type: AdmissionPhase,
  dataX?: any,
) {
  try {
    if (type === "Interview") {
      const row = await prisma.studentRegistrationChildren.findFirst({
        where: {
          id,
        },
      });

      const x = JSON.parse(row?.data ?? "{}");

      const final = {
        ...x,
        interview: dataX,
      };

      await prisma.studentRegistrationChildren.update({
        where: {
          id,
        },
        data: {
          data: JSON.stringify(final),
          progress: "Interview",
        },
      });

      revalidatePath(urlToRevalidate);
      revalidatePath(urls.admission.childrenData);
    } else {
      await prisma.studentRegistrationChildren.update({
        where: {
          id,
        },
        data: {
          progress: type,
        },
      });
    }

    revalidatePath(urlToRevalidate);
  } catch (e: any) {
    handlePrismaError(e);
  }
}

export async function submitAssessment(
  id: number,
  assessment: Record<string, any>,
) {
  try {
    const row = await prisma.studentRegistrationChildren.findFirst({
      where: {
        id,
      },
    });

    const x = JSON.parse(row?.data ?? "{}");

    const final = {
      ...x,
      assessment,
    };

    await prisma.studentRegistrationChildren.update({
      where: {
        id,
      },
      data: {
        data: JSON.stringify(final),
        progress: "Evaluation",
      },
    });

    revalidatePath(urlToRevalidate);
  } catch (e: any) {
    handlePrismaError(e);
  }
}

export async function uploadFileInterview(
  id: number,
  data: Record<string, any>,
) {
  try {
    return await prisma.studentRegistrationChildren.update({
      where: {
        id,
      },
      data: {
        data: JSON.stringify(data),
      },
    });
  } catch (e: any) {
    handlePrismaError(e);
  }
}

export async function updatePayment(id: number, payment: Record<string, any>) {
  try {
    const row = await prisma.studentRegistrationChildren.findFirst({
      where: {
        id,
      },
    });

    const x = JSON.parse(row?.data ?? "{}");

    const final = {
      ...x,
      payment,
    };

    await prisma.studentRegistrationChildren.update({
      where: {
        id,
      },
      data: {
        data: JSON.stringify(final),
        progress: "Payment",
      },
    });

    revalidatePath(urlToRevalidate);
  } catch (e: any) {
    handlePrismaError(e);
  }
}
