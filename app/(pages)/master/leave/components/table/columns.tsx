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
      title: "Code",
      dataIndex: "code",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Status",
      dataIndex: "active",
      render: (v) => (v ? "Active" : "Inactive"),
    },
  ];
};
