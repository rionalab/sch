"use server";
import { today } from "@/libs/helpers";
import prisma from "@/libs/prisma";

export async function updateLastLogin(id: number) {
  await prisma.user.update({
    where: {
      id,
    },
    data: {
      lastLogin: today().format(),
    },
  });
}
