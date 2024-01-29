import { messages } from "@/consts";
import { Prisma } from "@prisma/client";

const d = {
  Position: {
    name: "Position name",
  },
} as const;

export function handlePrismaError(e: any) {
  try {
    if (
      e instanceof Prisma.PrismaClientKnownRequestError &&
      e.code === "P2002"
    ) {
      const target = e.meta?.target as string;
      /* 
      target value supposed = Employee_NIP_key (so far)
      may change, adjust accordingly later 
      */

      const arrTarget = String(target).split("_");
      const modelName = arrTarget[0];
      const fieldName = arrTarget[1];

      console.error(`Error\n==========================\n`);
      console.log(arrTarget);
      console.log(modelName, fieldName);

      const words = ["email", "NIP", "NIK", "name", "Position"];

      const matchByModel = words.includes(modelName);
      const matchByField = words.includes(fieldName);

      if (matchByModel && matchByField) {
        if (modelName === "Position" && fieldName === "name") {
          throw new Error(messages.dataAlreadyUsed(d.Position.name));
        }
      }

      if (matchByField) {
        throw new Error(messages.dataAlreadyUsed(arrTarget[1]));
      }
    }

    throw new Error();
  } catch (e: any) {
    const msg = String(e.message ?? messages.somethingWentWrong);
    throw new Error(msg);
  }
}
