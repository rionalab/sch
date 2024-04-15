import { dMYHis } from "@/libs/helpers";
import { type Prisma } from "@prisma/client";
import { type ColumnsType } from "antd/es/table";

export const columns = (): ColumnsType<Prisma.VendorCreateInput> => {
  return [
    {
      title: "No",
      width: 80,
      dataIndex: "no",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      render: (role) => {
        return role?.label;
      },
    },
    {
      title: "Department",
      dataIndex: "department",
      render: (department) => {
        return department?.name ?? "None";
      },
    },
    {
      title: "Last Login",
      dataIndex: "lastLogin",
      render: (value) => {
        return dMYHis(value);
      },
    },
  ];
};
