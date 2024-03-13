import { messages } from "@/consts";
import dayjs from "dayjs";
import { Prisma } from "@prisma/client";
import { type ModuleCode } from "@/types";

const d = {
  Position: {
    name: "Position name",
  },
  Inventory: {
    code: "Inventory code",
  },
} as const;

export function handlePrismaError(e: any) {
  console.clear();
  console.log("11111 #####################");
  console.log(1, e?.code);
  console.log(2, e?.meta?.cause);
  console.log(3, e?.meta);
  console.log(4, e);
  console.log("22222 #####################");

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

        const words = [
          "email",
          "code",
          "Inventory",
          "NIP",
          "NIK",
          "name",
          "Position",
        ];

        const matchByModel = words.includes(modelName);
        const matchByField = words.includes(fieldName);

        if (matchByModel && matchByField) {
          if (modelName === "Position" && fieldName === "name") {
            throw new Error(messages.dataAlreadyUsed(d.Position.name));
          } else if (modelName === "Inventory" && fieldName === "code") {
            throw new Error(messages.dataAlreadyUsed(d.Inventory.code));
          }
        }

        if (matchByField) {
          throw new Error(messages.dataAlreadyUsed(arrTarget[1]));
        }
      }

      if (code === "P2025") {
        throw new Error(cause || messages.deleteError);
      }
    } else {
      throw new Error(String(e?.message) ?? "");
    }

    const generalMsg = [messages.somethingWentWrong, e?.code ?? ""]
      .filter(Boolean)
      .join(": ");

    throw new Error(generalMsg);
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

export function code(code: ModuleCode, index: number) {
  try {
    const date = dayjs();
    const year = date.year();
    const month = date.format("MM");

    let numStr = index.toString();

    while (numStr.length < 4) {
      numStr = "0" + numStr;
    }

    return `KR/${code}/${year}/${month}/${numStr}`;
  } catch (e) {
    throw Error("code is required on prisma code function helpers");
  }
}
