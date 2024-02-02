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
    {
      title: "Account No",
      dataIndex: "accountNo",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Blacklist",
      dataIndex: "blacklist",
      render: (v) => {
        let color;
        if (v) {
          color = green[5];
        } else {
          color = red.primary;
        }

        return <Tag color={color}>{v ? "Yes" : "No"}</Tag>;
      },
    },
    {
      title: "Remarks",
      dataIndex: "remarks",
      render: (v: string) => cell(v),
    },
  ];
};
