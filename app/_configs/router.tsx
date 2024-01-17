import { urls } from "@/consts/urls";
import { UserOutlined, DeploymentUnitOutlined } from "@ant-design/icons";
import { ModuleName, Route } from "@/types";

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
};

type Routes = Record<ModuleName, Route>;
