import { type Dayjs } from "dayjs";

export interface FormFields {
  id: number;
  employeeId: number;
  leaveTypeId: number;
  status: string /* approved | rejected | pending  */;
  remarks: string;
  date: any;
  dateFrom: string;
  dateTo: string;
}
