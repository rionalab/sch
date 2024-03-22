import { type Breadcrumb } from ".";

export interface ActivePage {
  url: string;
  icon: React.ReactNode;
  title: string;
}

export type VoidMethod = () => void;

export interface Route {
  url: string;
  title: string;
  icon: React.ReactNode;
  breadcrumb?: Breadcrumb[];
}

export interface Option {
  label: string;
  value: string;
}

export type Options = Option[];

interface UserRoleAction {
  id: number;
  name: string;
  label: string;
  actions: string;
  roleAccess: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: any;
}

export interface UserSession {
  hasUpdatePassword: boolean;
  role: UserRoleAction;
  name: string;
  label: string;
  id: number;
}

export type ModuleName =
  | "employee"
  | "position"
  | "vendor"
  | "help"
  | "uom"
  | "documentation"
  | "purchaseRequest"
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
  | "PR"
  | "DPT"
  | "extracurricular"
  | "workUnit"
  | "INV"
  | "leaveRequest"
  | "leaveType";

export type MenuAccess =
  | "*"
  | "menu_master"
  | "menu_hr"
  | "menu_staff"
  | "menu_account"
  | "menu_superadmin"
  | "menu_account"
  | "menu_user"
  | "menu_edit_user"
  | "menu_create_user"
  | "menu_employee"
  | "menu_edit_employee"
  | "menu_create_employee"
  | "menu_role"
  | "menu_edit_role"
  | "menu_create_role"
  | "menu_uom"
  | "menu_edit_uom"
  | "menu_create_uom"
  | "menu_leave"
  | "menu_create_leave"
  | "menu_edit_leave"
  | "menu_vendor"
  | "menu_edit_vendor"
  | "menu_create_vendor"
  | "menu_position"
  | "menu_create_position"
  | "menu_edit_position"
  | "menu_department"
  | "menu_create_department"
  | "menu_edit_department"
  | "menu_leaveRequest"
  | "menu_edit_leaveRequest"
  | "menu_create_leaveRequest"
  | "menu_inventory"
  | "menu_edit_inventory"
  | "menu_create_inventory"
  | "menu_workUnit"
  | "menu_edit_workUnit"
  | "menu_create_workUnit"
  | "menu_leaveType"
  | "menu_create_leaveType"
  | "menu_edit_leaveType"
  | "menu_extracurricular"
  | "menu_create_extracurricular"
  | "menu_edit_extracurricular"
  | "menu_purchaseRequest"
  | "menu_create_purchaseRequest"
  | "menu_edit_purchaseRequest"
  | "menu_updatePassword";
