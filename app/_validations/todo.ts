import { z } from "zod";
import { CreateTodo } from "@/types/todo";
import { label } from "@/consts/label";

export const validateCreate = (data: CreateTodo) => {
  return createSchema.safeParse(data);
};

const createSchema = z.object({
  id: z.number().optional(),
  isFinished: z.boolean(),
  user: z.number().optional(),
  userId: z.number(),
  task: z
    .string()
    .trim()
    .min(1, {
      message: label.fieldIsRequired,
    })
    .max(10, {
      message: label.maxNCharacters(10),
    }),
});

export type CreateTodoSchema = z.infer<typeof createSchema>;
