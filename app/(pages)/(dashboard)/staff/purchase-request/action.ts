/* eslint-disable @typescript-eslint/return-await */
"use server";

import { urls } from "@/consts";
import prisma from "@/libs/prisma";
import { revalidatePath } from "next/cache";
import { type FormFields } from "./type";
import { code, handlePrismaError, today } from "@/libs/helpers";
import { modelStore } from "./components/form/model";
import { auth } from "@/app/api/auth/[...nextauth]/options";
import type { UserSession } from "@/types";

const urlToRevalidate = urls.staff.purchaseRequest.index;

export async function index() {
  const { user } = ((await auth()) ?? {}) as { user: UserSession };

  if (!user) {
    return [];
  }

  if (user.role.name === "ManagerIT") {
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

    const rows = await prisma.purchaseRequest.findMany();

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
      code: code("PR", rows.length + 1),
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
    await prisma.purchaseRequest.softDelete({
      id,
    });
    revalidatePath(urlToRevalidate);
  } catch (e: any) {
    throw new Error(String(e?.message) ?? "");
  }
}
