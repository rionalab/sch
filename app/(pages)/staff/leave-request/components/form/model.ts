import { type Prisma } from "@prisma/client";
import { type FormFields } from "../../type";

export function modelStore(
  formValue: FormFields
): Prisma.LeaveRequestCreateInput {
  return {
    status: "pending",
    remarks: formValue.remarks,
    dateTo: formValue.dateTo,
    dateFrom: formValue.dateFrom,
    employee: {
      connect: { id: Number(formValue.employeeId) },
    },
    leaveType: {
      connect: { id: Number(formValue.leaveTypeId) },
    },
  };
}
