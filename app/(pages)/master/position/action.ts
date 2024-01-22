"use server";

import { urls, messages } from "@/consts";
import prisma from "@/libs/prisma";
import { revalidatePath } from "next/cache";

const urlToRevalidate = urls.master.position.index;

export async function index() {
  return await prisma.position.findMany();
}

interface TStore {
  name: string;
  category: "Edu" | "NonEdu";
}

export async function store(data: TStore) {
  try {
    const isExist = await prisma.position.findFirst({
      where: { name: data.name },
    });

    if (isExist) {
      throw new Error(messages.dataAlreadyExist);
    }

    const result = await prisma.position.create({
      data: {
        name: data.name,
        category: data.category,
      },
    });

    revalidatePath(urlToRevalidate);

    return { message: "success added", ...result };
  } catch (e: any) {
    throw new Error(e?.message ?? "");
  }
}

export async function destroy(id: number) {
  try {
    await prisma.position.delete({
      where: { id },
    });
    revalidatePath(urlToRevalidate);
  } catch (e: any) {
    throw new Error(e?.message ?? "");
  }
}
