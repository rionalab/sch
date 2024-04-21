"use server";

import { handlePrismaError } from "@/libs/helpers";
import prisma from "@/libs/prisma";
import { compare } from "bcrypt";

export async function signIn({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  try {
    const user = await prisma.userAdmission.findFirst({
      where: {
        email: username,
      },
    });

    if (!user) {
      throw new Error("Credentials is invalid");
    }

    const passwordValid = await compare(password, user.password);

    if (!passwordValid) {
      throw new Error("Credentials is invalid");
    }

    return { success: true, id: user.id };
  } catch (e: any) {
    handlePrismaError(e);
  }
}
