"use server";

import { handlePrismaError } from "@/libs/helpers";
import prisma from "@/libs/prisma";
import bcrypt from "bcrypt";
import { FormFieldsRegister } from "../../types";

export async function store(data: FormFieldsRegister) {
  try {
    const { username, password, confirm_password } = data;

    // validate if email is registered
    const isRegistered = await prisma.UserAdmission.findFirst({
      where: {
        email: username,
      },
    });

    if (isRegistered) {
      throw new Error("Email is registered");
    }

    const passwordIsCorrupt =
      password !== confirm_password ||
      password.length < 8 ||
      confirm_password.length < 8;

    if (passwordIsCorrupt) {
      throw new Error("Password is corrupt");
    }

    const result = await prisma.UserAdmission.create({
      data: {
        name: "-",
        email: username,
        password: await bcrypt.hash(password, 10),
      },
    });

    return { success: true, ...result };
  } catch (e: any) {
    handlePrismaError(e);
  }
}
