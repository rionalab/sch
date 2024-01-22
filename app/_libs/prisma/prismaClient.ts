"use server";

import prisma from "@/libs/prisma";

export async function index() {
  return await prisma.position.findMany();
}
