"use server";

import { wait } from "@/libs/helpers";
import prisma from "@/libs/prisma";

export async function index() {
  await wait();
  return await prisma.position.findMany();
}

export async function store() {
  try {
    await wait(7000);
    const result = await prisma.position.create({
      data: {
        name: "testing",
        category: "Edu",
      },
    });

    return { message: "success added", ...result };
  } catch (e: any) {
    return { message: `Failedx to create todo. (${e?.message ?? ""})` };
  }
}
