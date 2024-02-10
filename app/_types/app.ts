import { type Breadcrumb } from ".";

export interface ActivePage {
  url: string;
  icon: React.ReactNode;
  title: string;
}

export interface Route {
  url: string;
  title: string;
  icon: React.ReactNode;
  breadcrumb?: Breadcrumb[];
}

export type ModuleName =
  | "employee"
  | "position"
  | "vendor"
  | "uom"
  | "department"
  | "extracurricular"
  | "workUnit"
  | "inventory"
  | "leaveRequest"
  | "leaveType";

export type ModuleCode =
  | "employee"
  | "POS"
  | "SPP"
  | "uom"
  | "department"
  | "extracurricular"
  | "workUnit"
  | "INV"
  | "leaveRequest"
  | "leaveType";
