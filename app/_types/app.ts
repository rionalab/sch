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

interface UserRoleAction {
  id: number;
  name: string;
  actions: string;
  roleAccess: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: any;
}

export interface UserSession {
  hasUpdatePassword: boolean;
  role: UserRoleAction;
  id: number;
}

export type ModuleName =
  | "employee"
  | "position"
  | "vendor"
  | "uom"
  | "role"
  | "department"
  | "extracurricular"
  | "workUnit"
  | "inventory"
  | "leaveRequest"
  | "user"
  | "leaveType"
  | "updatePassword";

export type ModuleCode =
  | "employee"
  | "POS"
  | "SPP"
  | "uom"
  | "DPT"
  | "extracurricular"
  | "workUnit"
  | "INV"
  | "leaveRequest"
  | "leaveType";
