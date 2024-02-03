import { type ColumnsType } from "antd/es/table";
import { type Prisma } from "@prisma/client";
import { red, green } from "@ant-design/colors";
import { Tag } from "antd";
import { cell } from "@/libs/helpers";

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
  ];
};
