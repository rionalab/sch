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
      title: "Paid",
      dataIndex: "paid",
      render: (v) => (v ? "Yes" : "No"),
    },
    {
      title: "Price",
      dataIndex: "price",
      render: (v) => c(v),
    },
    {
      title: "Description",
      dataIndex: "description",
    },
  ];
};
