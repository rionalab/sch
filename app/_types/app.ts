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
  department: { id: number };
  id: number;
}

export type ModuleName =
  | "master_department"
  | "master_supplier"
  | "master_uom"
  | "master_inventory"
  | "master_position"
  | "master_student_act"
  | "master_work_unit"
  | "master_leave_type"
  | "master_user"
  | "ao_admission"
  | "marketing_form"
  | "hr_employee"
  | "staff_purchase"
  | "staff_leave_request"
  | "help"
  | "documentation"
  | "admin_role"
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
  | "role_master"
  | "role_hr"
  | "role_staff"
  | "role_account"
  | "role_superadmin"
  | "role_account"
  | "role_user"
  | "role_edit_user"
  | "role_create_user"
  | "role_hr_employee"
  | "role_hr_employee_view"
  | "role_hr_employee_edit"
  | "role_hr_employee_create"
  | "role_hr_employee_delete"
  | "role_ao_admission"
  | "role_ao_admission_view"
  | "role_ao_admission_edit"
  | "role_ao_admission_create"
  | "role_ao_admission_delete"
  | "role_marketing_form"
  | "role_marketing_form_view"
  | "role_marketing_form_edit"
  | "role_marketing_form_create"
  | "role_marketing_form_delete"
  | "role_admin"
  | "role_admin_role"
  | "role_admin_role_view"
  | "role_admin_role_create"
  | "role_admin_role_edit"
  | "role_admin_role_delete"
  | "role_master_supplier"
  | "role_master_supplier_view"
  | "role_master_supplier_create"
  | "role_master_supplier_edit"
  | "role_master_supplier_delete"
  | "role_master_user"
  | "role_master_user_view"
  | "role_master_user_create"
  | "role_master_user_edit"
  | "role_master_user_delete"
  | "role_master_leave_type"
  | "role_master_leave_type_view"
  | "role_master_leave_type_create"
  | "role_master_leave_type_edit"
  | "role_master_leave_type_delete"
  | "role_master_uom"
  | "role_master_uom_view"
  | "role_master_uom_create"
  | "role_master_uom_edit"
  | "role_master_uom_delete"
  | "role_master_work_unit"
  | "role_master_work_unit_view"
  | "role_master_work_unit_create"
  | "role_master_work_unit_edit"
  | "role_master_work_unit_delete"
  | "role_master_department"
  | "role_master_department_view"
  | "role_master_department_create"
  | "role_master_department_edit"
  | "role_master_department_delete"
  | "role_master_student_act"
  | "role_master_student_act_view"
  | "role_master_student_act_create"
  | "role_master_student_act_edit"
  | "role_master_student_act_delete"
  | "role_master_inventory"
  | "role_master_inventory_view"
  | "role_master_inventory_create"
  | "role_master_inventory_edit"
  | "role_master_inventory_delete"
  | "role_staff_leave_request"
  | "role_staff_leave_request_view"
  | "role_staff_leave_request_create"
  | "role_staff_leave_request_edit"
  | "role_staff_leave_request_delete"
  | "role_staff_purchase"
  | "role_staff_purchase_view"
  | "role_staff_purchase_create"
  | "role_staff_purchase_edit"
  | "role_staff_purchase_delete"
  | "role_master_position"
  | "role_master_position_view"
  | "role_master_position_create"
  | "role_master_position_edit"
  | "role_master_position_delete"
  | "role_account_password_view";
