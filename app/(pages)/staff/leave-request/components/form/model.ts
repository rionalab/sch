import { type Prisma } from "@prisma/client";
import { type FormFields } from "../../type";

export function modelStore(
  formValue: FormFields
): Prisma.LeaveRequestCreateInput {
  return {
    status: "pending",
    remarks: formValue.remarks,
    dateTo: formValue.dateTo.format(),
    dateFrom: formValue.dateFrom.format(),
    employee: {
      connect: { id: formValue.employeeId },
    },
    leaveType: {
      connect: { id: formValue.leaveTypeId },
    },
  };
}
