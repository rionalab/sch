"use server";

import prisma from "@/libs/prisma";
import bcrypt from "bcrypt";
import { type FormFields } from "./type";
import { handlePrismaError } from "@/libs/helpers";

export async function store(data: FormFields) {
  try {
    const { id, oldPassword, newPassword, newPasswordConfirm } = data;

    /*  check if old password is correct */
    const user = await prisma.user.findFirst({
      where: {
        id: Number(id),
      },
    });

    const oldPasswordIsMatch = await bcrypt.compare(
      oldPassword,
      user?.password ?? "",
    );

    if (!oldPasswordIsMatch) {
      throw new Error("Old password is incorrect");
    }

    if (newPassword !== newPasswordConfirm) {
      throw new Error("New password is not match");
    }

    const result = await prisma.user.update({
      where: { id: Number(id) },
      data: {
        hasUpdatePassword: true,
        password: await bcrypt.hash(data.newPassword, 10),
      },
    });

    return { success: true, ...result };
  } catch (e: any) {
    handlePrismaError(e);
  }
}
