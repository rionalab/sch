"use server";

import { sendResponse } from "@/libs/helpers/request";
import prisma from "@/libs/prisma";
import { RequestResponse } from "@/types/request";
import { CreateTodo } from "@/types/todo";
import { validateCreate } from "@/validations/todo";
import { revalidatePath } from "next/cache";

export const createTodo = async (
  data: CreateTodo
): Promise<RequestResponse> => {
  try {
    const validation = validateCreate(data);

    if (!validation.success) {
      return sendResponse({
        success: false,
        data: validation.error.issues,
      });
    }

    await prisma.todo.create({
      data,
    });

    revalidatePath("/todos");

    return sendResponse({ success: true, data: 123 });
  } catch (e: any) {
    return sendResponse({
      success: false,
      // data: e.message,
      data: { message: e.message },
    });
  }
};
