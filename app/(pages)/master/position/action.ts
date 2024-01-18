/* eslint-disable */

"use server";

import { urls } from "@/consts/urls";
import { wait } from "@/libs/helpers";
import prisma from "@/libs/prisma";
import { PositionCategory, Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function index() {
  return await prisma.position.findMany();
}

type TStore = { name: string; category: PositionCategory; redirectUrl: string };

export async function store(data: TStore) {
  try {
    const result = await prisma.position.create({
      data: {
        name: data.name,
        category: data.category,
      },
    });

    revalidatePath(data.redirectUrl);

    return { message: "success added", ...result };
  } catch (e: any) {
    throw new Error(e.message);
  }
}
