import { formToPrisma } from "@/libs/helpers";
import { type FormFields } from "../../type";

export function submitEmployeeData(dirtyValue: FormFields) {
  const { PKWT, ...rest } = dirtyValue;

  const transformed = {
    ...rest,
    PKWTStart: PKWT?.[0],
    PKWTEnd: PKWT?.[1],
  };

  return formToPrisma(transformed);
}
