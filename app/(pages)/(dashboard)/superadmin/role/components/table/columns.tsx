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
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Actions",
      dataIndex: "actions",
    },
  ];
};
