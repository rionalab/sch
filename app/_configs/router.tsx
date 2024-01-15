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
  department: {
    url: urls.master.department.index,
    title: "Department",
    icon: <DeploymentUnitOutlined />,
  },
};

type Routes = Record<ModuleName, Route>;
