import { c } from "@/libs/helpers";
import { type Prisma } from "@prisma/client";
import { type ColumnsType } from "antd/es/table";

export const columns = (): ColumnsType<Prisma.DocumentsCreateInput> => {
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
      title: "type",
      width: 120,
      dataIndex: "type",
    },
    {
      title: "price",
      dataIndex: "price",
      render: (a, row) => {
        return row?.isPaid ? c(row.price) : "Free";
      },
    },
    {
      title: "remarks",
      dataIndex: "remarks",
    },
  ];
};
