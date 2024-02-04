// import { z } from "zod";
// import { CreateTodo } from "@/types";
// import { messages } from "@/consts";

// export const validateCreate = (data: CreateTodo) => {
//   return createSchema.safeParse(data);
// };

// const createSchema = z.object({
//   id: z.number().optional(),
//   isFinished: z.boolean(),
//   user: z.number().optional(),
//   userId: z.number(),
//   task: z
//     .string()
//     .trim()
//     .min(1, {
//       message: messages.fieldIsRequired,
//     })
//     .max(10, {
//       message: messages.maxNCharacters(10),
//     }),
// });

// export type CreateTodoSchema = z.infer<typeof createSchema>;
