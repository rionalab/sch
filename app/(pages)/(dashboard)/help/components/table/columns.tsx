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
      width: 220,
      title: "Label",
      dataIndex: "label",
    },
    {
      width: 220,
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      ellipsis: true,
    },
  ];
};
