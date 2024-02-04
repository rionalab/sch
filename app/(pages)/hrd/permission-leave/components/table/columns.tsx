import { type ColumnsType } from "antd/es/table";
import { type Prisma } from "@prisma/client";
import { c } from "@/libs/helpers";

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
      title: "Active",
      dataIndex: "status",
      render: (v) => (v ? "Yes" : "No"),
    },

    {
      title: "Description",
      dataIndex: "description",
    },
  ];
};
