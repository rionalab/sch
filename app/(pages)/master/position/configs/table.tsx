import { ColumnsType } from "antd/es/table";
import { Prisma } from "@prisma/client";
import { cellPositionCategory } from "@/libs/helpers";

export const columns = (): ColumnsType<Prisma.PositionCreateInput> => {
  return [
    {
      title: "No",
      width: 80,
      dataIndex: "no",
    },
    {
      title: "Position",
      width: 200,
      dataIndex: "name",
      sorter: (a, b) => (a.name > b.name ? -1 : 1),
    },
    {
      title: "Category",
      dataIndex: "category",
      render: (v) => cellPositionCategory(v),
      sorter: (a, b) => (a.name > b.name ? -1 : 1),
    },
  ];
};
