import { c } from "@/libs/helpers";
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
      title: "Code",
      dataIndex: "code",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Budget",
      dataIndex: "budget",
      render: (v) => c(v),
    },
    {
      title: "Description",
      dataIndex: "description",
    },
  ];
};
