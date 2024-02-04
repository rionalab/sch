import { type Dayjs } from "dayjs";

export interface FormFields {
  employeeId: number;
  leaveTypeId: number;
  status: string /* approved | rejected | pending  */;
  remarks: string;
  dateFrom: Dayjs;
  dateTo: Dayjs;
}
