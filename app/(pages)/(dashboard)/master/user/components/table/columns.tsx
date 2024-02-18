import { type ColumnsType } from "antd/es/table";
import { type Prisma } from "@prisma/client";

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
      dataIndex: "roleAccess",
    },
    {
      title: "Profile",
      dataIndex: "profile",
    },
    {
      title: "Last Login",
      dataIndex: "lastLogin",
    },
  ];
};
