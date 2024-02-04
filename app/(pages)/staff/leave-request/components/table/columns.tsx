import { type ColumnsType } from "antd/es/table";
import { type Prisma } from "@prisma/client";
import { dMY } from "@/libs/helpers";

export const columns = (): ColumnsType<Prisma.VendorCreateInput> => {
  return [
    {
      title: "No",
      width: 80,
      dataIndex: "no",
    },
    {
      title: "Name",
      dataIndex: "leaveType",
      render: (v) => v.name,
    },
    {
      title: "From",
      dataIndex: "dateFrom",
      render: (v) => dMY(v),
    },
    {
      title: "To",
      dataIndex: "dateTo",
      render: (v) => dMY(v),
    },
    {
      title: "Status",
      dataIndex: "status",
    },

    {
      title: "remarks",
      dataIndex: "remarks",
    },
  ];
};
