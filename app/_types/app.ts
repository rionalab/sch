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

export type MenuAccess =
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
  | "menu_leave_request"
  | "menu_edit_leave_request"
  | "menu_create_leave_request"
  | "menu_update_password"
  | "menu_inventory"
  | "menu_edit_inventory"
  | "menu_create_inventory"
  | "menu_work_unit"
  | "menu_edit_work_unit"
  | "menu_create_work_unit"
  | "menu_permission_leave"
  | "menu_create_permission_leave"
  | "menu_edit_permission_leave"
  | "menu_student_activities"
  | "menu_create_student_activities"
  | "menu_edit_student_activities";
