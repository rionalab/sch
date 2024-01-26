"use server";

import prisma from "@/libs/prisma";
import { wait } from "../helpers";

export async function index() {
  return await prisma.position.findMany();
}

export async function findFirst(model: any, where: Record<string, any>) {
  //@ts-ignore
  return await prisma[model].findFirst({
    where,
  });
}

interface Update {
  model: any;
  where?: Record<string, any>;
  data: Record<string, any>;
}

export async function update({ model, where, data }: Update) {
  //@ts-ignore
  const result = await prisma[model].update({
    where: where || { id: data.id },
    data,
  });

  return result;
}
