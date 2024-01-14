"use server";

import prisma from "@/libs/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const index = async () => {};

export const store = async (
  prevState: {
    message: string;
  },
  formData: FormData
) => {
  const schema = z.object({
    name: z.string().min(1),
  });

  const parse = schema.safeParse({
    name: formData.get("name"),
  });

  if (!parse.success) {
    return { message: "Failed to create todo" };
  }

  const data = parse.data;

  console.log(data);

  try {
  } catch (e) {
    console.log(e);
    return { message: "Failed to create fruit" };
  }
};

export const show = async () => {};

export const update = async () => {};

export const destroy = async () => {};

export const edit = async () => {};
