import { z } from "zod";
import { CreateTodo } from "@/types/todo";

export const validateCreate = (data: CreateTodo) => {
  return createSchema.safeParse(data);
};

const createSchema = z.object({
  id: z.number().optional(),
  task: z
    .string()
    .trim()
    .min(1, {
      message: "please input value",
    })
    .max(10, {
      message: "max 10 chars",
    }),
});
