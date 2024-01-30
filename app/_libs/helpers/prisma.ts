import { messages } from "@/consts";
import dayjs from "dayjs";
import { Prisma } from "@prisma/client";

const d = {
  Position: {
    name: "Position name",
  },
} as const;

export function handlePrismaError(e: any) {
  console.log(11111111111111);
  console.log(e);
  console.log(e.code);
  const isPrismaError = e instanceof Prisma.PrismaClientKnownRequestError;

  try {
    if (isPrismaError) {
      const { code } = e;
      const cause = e?.meta?.cause as string;

      if (code === "P2002") {
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

      if (code === "P2025") {
        throw new Error(cause || messages.deleteError);
      }
    }

    throw new Error(messages.somethingWentWrong);
  } catch (e: any) {
    const msg = String(e.message ?? messages.somethingWentWrong);
    throw new Error(msg);
  }
}

export function prismaToForm(dbValue: Record<string, any>) {
  const result: Record<string, any> = {};

  Object.keys(dbValue).forEach((key) => {
    let val = dbValue[key];
    const valIsDate = val instanceof Date;

    if (valIsDate) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      val = dayjs(val);
    }

    result[key] = val;
  });

  return result;
}

export function formToPrisma(formValue: Record<string, any>) {
  const result: Record<string, any> = {};

  Object.keys(formValue).forEach((key) => {
    let val = formValue[key];
    const valIsDayjs = dayjs.isDayjs(val);

    if (valIsDayjs) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      val = val.format();
    }

    result[key] = val;
  });

  return result;
}
