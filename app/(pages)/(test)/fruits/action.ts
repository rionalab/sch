"use server";

import prisma from "@/libs/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const index = async () => {
  return prisma.fruit.findMany();
};

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
    const x = await prisma.fruit.create({
      data,
    });
    revalidatePath("/fruits");
    return { message: `Added fruit ${data.name}` };
  } catch (e) {
    console.log(e);
    return { message: "Failed to create fruit" };
  }
};

export const show = async () => {
  return prisma.fruit.findMany();
};

export const update = async () => {
  return prisma.fruit.findMany();
};

export const destroy = async () => {
  return prisma.fruit.findMany();
};

export const edit = async () => {
  return prisma.fruit.findMany();
};
