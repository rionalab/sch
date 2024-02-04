import { urls } from "@/consts";
import { UserOutlined, DeploymentUnitOutlined } from "@ant-design/icons";
import { type ModuleName, type Route } from "@/types";

export const routes: Routes = {
  employee: {
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
  position: {
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
  vendor: {
    url: urls.master.vendor.index,
    title: "Supplier",
    icon: <DeploymentUnitOutlined />,
    breadcrumb: [
      {
        title: "Master Data",
      },
      {
        title: "Vendor",
        icon: <DeploymentUnitOutlined />,
        url: urls.master.vendor.index,
      },
    ],
  },
  department: {
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
  inventory: {
    url: urls.master.inventory.index,
    title: "inventory",
    icon: <DeploymentUnitOutlined />,
    breadcrumb: [
      {
        title: "Master Data",
      },
      {
        title: "inventory",
        icon: <DeploymentUnitOutlined />,
        url: urls.master.inventory.index,
      },
    ],
  },
  uom: {
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
  extracurricular: {
    url: urls.master.extracurricular.index,
    title: "extracurricular ",
    icon: <DeploymentUnitOutlined />,
    breadcrumb: [
      {
        title: "Master Data",
      },
      {
        title: "extracurricular ",
        icon: <DeploymentUnitOutlined />,
        url: urls.master.extracurricular.index,
      },
    ],
  },
  workUnit: {
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
  leaveType: {
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
  leaveRequest: {
    url: urls.staff.leaveRequest.index,
    title: "Leave Type",
    icon: <DeploymentUnitOutlined />,
    breadcrumb: [
      {
        title: "Master Data",
      },
      {
        title: "Leave request",
        icon: <DeploymentUnitOutlined />,
        url: urls.staff.leaveRequest.index,
      },
    ],
  },
};

type Routes = Record<ModuleName, Route>;
