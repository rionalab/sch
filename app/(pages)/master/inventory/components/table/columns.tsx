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
      title: "Code",
      dataIndex: "code",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Department",
      dataIndex: "owner",
      render: (v) => v.name,
    },
    {
      title: "Qty",
      dataIndex: "qty",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Unit",
      dataIndex: "UOM",
    },
    {
      title: "Remarks",
      dataIndex: "remarks",
    },
  ];
};
