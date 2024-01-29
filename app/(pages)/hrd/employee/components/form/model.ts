import { FormFields, StoreEmployee, StoreEmployeeByCreate } from "../../type";

export function modelEmployee(dirtyValue: FormFields) {
  const { PKWT, ...rest } = dirtyValue;

  return {
    ...rest,
    PKWTStart: PKWT?.[0].format(),
    PKWTEnd: PKWT?.[1].format(),
    hireDate: dirtyValue.hireDate.format(),
    TMT: dirtyValue.TMT.format(),
    dob: dirtyValue.dob.format(),
  };
}
