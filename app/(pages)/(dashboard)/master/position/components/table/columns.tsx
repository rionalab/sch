import { type ColumnsType } from "antd/es/table";
import { type Prisma } from "@prisma/client";
import { cellPositionCategory } from "@/libs/helpers";

export const columns = (): ColumnsType<Prisma.PositionCreateInput> => {
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
      title: "Position",
      width: 200,
      dataIndex: "name",
      sorter: (a, b) => (a.name > b.name ? -1 : 1),
    },
    {
      title: "Category",
      dataIndex: "category",
      render: (v: "Edu" | "NonEdu") => cellPositionCategory(v),
      sorter: (a, b) => (a.name > b.name ? -1 : 1),
    },
    {
      title: "Description",
      dataIndex: "description",
    },
  ];
};
