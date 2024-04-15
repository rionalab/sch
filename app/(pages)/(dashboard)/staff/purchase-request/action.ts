/* eslint-disable @typescript-eslint/return-await */
"use server";

import { auth } from "@/app/api/auth/[...nextauth]/options";
import { urls } from "@/consts";
import { code, handlePrismaError, today } from "@/libs/helpers";
import prisma from "@/libs/prisma";
import type { UserSession } from "@/types";
import { revalidatePath } from "next/cache";
import { type FormFields } from "./type";

const urlToRevalidate = urls.staff.purchaseRequest.index;

export async function index() {
  const { user } = ((await auth()) ?? {}) as { user: UserSession };

  if (!user) {
    return [];
  }

  if (user.role.name === "ManagerIT") {
    const department = await prisma.department.findFirst({
      where: {
        name: "TI",
      },
    });

    return await prisma.purchaseRequest.findMany({
      where: {
        departmentId: department?.id,
      },
      include: {
        department: true,
        items: {
          include: {
            inventory: true,
          },
        },
      },
    });
  }

  if (user.role.name === "ManagerGeneralAffair") {
    const department = await prisma.department.findFirst({
      where: {
        name: "GA",
      },
    });

    return await prisma.purchaseRequest.findMany({
      where: {
        departmentId: department?.id,
      },
      include: {
        department: true,
        items: {
          include: {
            inventory: true,
          },
        },
      },
    });
  }

  return await prisma.purchaseRequest.findMany({
    where: {
      requesterId: Number(user?.id),
    },
    include: {
      department: true,
      items: {
        include: {
          inventory: true,
        },
      },
    },
  });
}

export async function store(data: FormFields & { purchaseRequestItem: any[] }) {
  try {
    const { user } = ((await auth()) ?? {}) as { user: UserSession };

    const nextCode = await prisma.purchaseRequest.nexttCode();

    const items = data.purchaseRequestItem.map((row) => {
      const { key, name, id, ...rest } = row;

      return {
        ...rest,
        unitPrice: 1,
        totalPrice: 1,
        inventoryId: Number(row.inventoryId),
      };
    });

    const pr = {
      code: code("PR", nextCode ?? 1),
      requesterId: Number(user.id),
      approverId: Number(user.id),
      departmentId: Number(user.department.id),
      payment: "",
      purchaseDate: today().format(),
      deliveryDate: today().format(),
      remarks: data.remarks,
      status: "pending",
      items: {
        create: items,
      },
    };

    const result = await prisma.purchaseRequest.create({
      data: pr,
    });

    // if (data.id != null) {
    //   result = await prisma.purchaseRequest.update({
    //     where: { id: Number(data.id) },
    //     data: modelStore(data),
    //   });
    // } else {
    //   // result = await prisma.purchaseRequest.create({
    //   //   // data: modelStore(data),
    //   // });
    // }

    revalidatePath(urlToRevalidate);
    return { success: true, ...result };
  } catch (e: any) {
    handlePrismaError(e);
  }
}

export async function show(id: number) {
  return await prisma.purchaseRequest.findFirst({
    where: {
      id,
    },
  });
}

export async function destroy(id: number) {
  try {
    await prisma.purchaseRequestItem.deleteMany({
      where: {
        purchaseRequestId: id,
      },
    });

    await prisma.purchaseRequest.delete({
      where: {
        id,
      },
    });

    revalidatePath(urlToRevalidate);
  } catch (e: any) {
    throw new Error(String(e?.message) ?? "");
  }
}

export async function approve(id: number) {
  try {
    await prisma.purchaseRequest.update({
      where: { id: Number(id) },
      data: {
        status: "approved",
      },
    });

    revalidatePath(urlToRevalidate);
  } catch (e: any) {
    throw new Error(String(e?.message) ?? "");
  }
}
