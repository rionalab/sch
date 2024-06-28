"use server";

import { randomString } from "@/libs/helpers";
import prisma from "@/libs/prisma";

export async function checkHasRegisterParent(userId: number) {
  try {
    const result = await prisma?.userAdmission.findFirst({
      where: {
        id: userId,
      },
      include: {
        parentData: true,
      },
    });

    return result?.parentData;
  } catch (e) {
    console.log(e);
  }
}

export async function findPurchaseAdmission(id: number, userId: number) {
  return await prisma.purchaseAdmission.findFirst({
    where: {
      id,
      userId,
    },
  });
}

export async function getParentAdmissionTicket(userId: number) {
  try {
    return await prisma.purchaseAdmission.findMany({
      where: {
        userId,
      },
    });
  } catch (e: any) {
    return [];
  }
}

export async function getAdmissions(userId: number) {
  try {
    return prisma.studentRegistrationChildren.findMany({
      where: {
        userId,
      },
    });
  } catch (e) {
    return [];
  }
}

export async function purchaseNewAdmission(userId: number) {
  try {
    const data = {
      type: "admission",
      userId,
      isUsed: false,
      code: randomString(8),
      price: 999,
    };

    return await prisma.purchaseAdmission.create({
      data,
    });
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function getAvailableAdmissionTicket(userId: number) {
  try {
    const w = await getParentAdmissionTicket(userId);
    return w.filter((row, i) => !row.isUsed && row.type === "admission");
  } catch (e) {
    return [];
  }
}
