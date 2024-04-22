import { urls } from "@/consts";
import { type ModuleName, type Route } from "@/types";
import { DeploymentUnitOutlined, UserOutlined } from "@ant-design/icons";

export const routes: Routes = {
  help: {
    url: urls.help,
    title: "Help",
    icon: <UserOutlined />,
    breadcrumb: [
      {
        title: "Help",
        icon: <UserOutlined />,
        url: urls.help,
      },
    ],
  },
  documentation: {
    url: urls.documentation,
    title: "Documentation",
    icon: <UserOutlined />,
    breadcrumb: [
      {
        title: "Documentation",
        icon: <UserOutlined />,
        url: urls.documentation,
      },
    ],
  },
  admin_role: {
    url: urls.superadmin.role.index,
    title: "Role",
    icon: <UserOutlined />,
    breadcrumb: [
      {
        title: "Super Admin",
      },
      {
        title: "Role",
        icon: <UserOutlined />,
        url: urls.superadmin.role.index,
      },
    ],
  },
  hr_employee: {
    url: urls.hrd.employee.index,
    title: "Employee",
    icon: <UserOutlined />,
    breadcrumb: [
      {
        title: "Human Resource",
      },
      {
        title: "Employee",
        icon: <UserOutlined />,
        url: urls.hrd.employee.index,
      },
    ],
  },

  ao_admission: {
    url: urls.admissionOfficer.admission.index,
    title: "Admission",
    icon: <UserOutlined />,
    breadcrumb: [
      {
        title: "Admission Officer",
      },
      {
        title: "Admission",
        icon: <UserOutlined />,
        url: urls.admissionOfficer.admission.index,
      },
    ],
  },

  master_position: {
    url: urls.master.position.index,
    title: "Position",
    icon: <DeploymentUnitOutlined />,
    breadcrumb: [
      {
        title: "Master Data",
      },
      {
        title: "Position",
        icon: <DeploymentUnitOutlined />,
        url: urls.master.position.index,
      },
    ],
  },
  master_supplier: {
    url: urls.master.vendor.index,
    title: "Supplier",
    icon: <DeploymentUnitOutlined />,
    breadcrumb: [
      {
        title: "Master Data",
      },
      {
        title: "Supplier",
        icon: <DeploymentUnitOutlined />,
        url: urls.master.vendor.index,
      },
    ],
  },
  master_department: {
    url: urls.master.department.index,
    title: "Department",
    icon: <DeploymentUnitOutlined />,
    breadcrumb: [
      {
        title: "Master Data",
      },
      {
        title: "department",
        icon: <DeploymentUnitOutlined />,
        url: urls.master.department.index,
      },
    ],
  },
  master_inventory: {
    url: urls.master.inventory.index,
    title: "inventory",
    icon: <DeploymentUnitOutlined />,
    breadcrumb: [
      {
        title: "Master Data",
      },
      {
        title: "Inventory",
        icon: <DeploymentUnitOutlined />,
        url: urls.master.inventory.index,
      },
    ],
  },
  master_uom: {
    url: urls.master.uom.index,
    title: "Unit of Measurement",
    icon: <DeploymentUnitOutlined />,
    breadcrumb: [
      {
        title: "Master Data",
      },
      {
        title: "Unit of Measurement",
        icon: <DeploymentUnitOutlined />,
        url: urls.master.uom.index,
      },
    ],
  },
  master_student_act: {
    url: urls.master.studentActivities.index,
    title: "Student Activities ",
    icon: <DeploymentUnitOutlined />,
    breadcrumb: [
      {
        title: "Master Data",
      },
      {
        title: "Student Activities ",
        icon: <DeploymentUnitOutlined />,
        url: urls.master.studentActivities.index,
      },
    ],
  },
  master_work_unit: {
    url: urls.master.workUnit.index,
    title: "Work Unit",
    icon: <DeploymentUnitOutlined />,
    breadcrumb: [
      {
        title: "Master Data",
      },
      {
        title: "Work Unit ",
        icon: <DeploymentUnitOutlined />,
        url: urls.master.workUnit.index,
      },
    ],
  },
  master_leave_type: {
    url: urls.master.leave.index,
    title: "Leave Type",
    icon: <DeploymentUnitOutlined />,
    breadcrumb: [
      {
        title: "Master Data",
      },
      {
        title: "leave",
        icon: <DeploymentUnitOutlined />,
        url: urls.master.leave.index,
      },
    ],
  },
  staff_leave_request: {
    url: urls.staff.leaveRequest.index,
    title: "Leave Request",
    icon: <DeploymentUnitOutlined />,
    breadcrumb: [
      {
        title: "Staff",
      },
      {
        title: "Leave request",
        icon: <DeploymentUnitOutlined />,
        url: urls.staff.leaveRequest.index,
      },
    ],
  },
  staff_purchase: {
    url: urls.staff.purchaseRequest.index,
    title: "Purchase Order",
    icon: <DeploymentUnitOutlined />,
    breadcrumb: [
      {
        title: "Staff ",
      },
      {
        title: "Purchase order",
        icon: <DeploymentUnitOutlined />,
        url: urls.staff.purchaseRequest.index,
      },
    ],
  },
  master_user: {
    url: urls.master.user.index,
    title: "User",
    icon: <DeploymentUnitOutlined />,
    breadcrumb: [
      {
        title: "Master Data",
      },
      {
        title: "User",
        icon: <DeploymentUnitOutlined />,
        url: urls.master.user.index,
      },
    ],
  },
  updatePassword: {
    url: urls.account.updatePassword.index,
    title: "Update Password",
    icon: <DeploymentUnitOutlined />,
    breadcrumb: [
      {
        title: "Account",
      },
      {
        title: "Update Password",
        icon: <DeploymentUnitOutlined />,
        url: urls.account.updatePassword.index,
      },
    ],
  },
};

type Routes = Record<ModuleName, Route>;
