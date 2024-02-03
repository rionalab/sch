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
    title: "Vendor",
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
};

type Routes = Record<ModuleName, Route>;
