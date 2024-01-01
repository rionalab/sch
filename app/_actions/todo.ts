import prisma from "@/libs/prisma";
import { revalidatePath } from "next/cache";

export const createTodo = async (formData: FormData) => {
  await prisma.todo.create({
    data: {
      task: formData.get("task") as string,
      isFinished: false,
      user: undefined,
      userId: 0,
    },
  });

  revalidatePath("/todos");
};
