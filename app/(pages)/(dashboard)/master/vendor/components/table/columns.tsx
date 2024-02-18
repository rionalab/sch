import { type ColumnsType } from "antd/es/table";
import { type Prisma } from "@prisma/client";
import { red, green } from "@ant-design/colors";
import { Tag } from "antd";
import { cell } from "@/libs/helpers";

export const columns = (): ColumnsType<Prisma.VendorCreateInput> => {
  return [
    {
      title: "No",
      width: 50,
      dataIndex: "no",
    },
    {
      title: "Code",
      width: 170,
      dataIndex: "code",
    },
    {
      title: "Name",
      dataIndex: "name",
      width: 190,
    },
    {
      title: "Account No",
      width: 130,
      dataIndex: "accountNo",
    },
    {
      width: 200,
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Phone",
      width: 166,
      dataIndex: "phone",
    },
    {
      width: 166,
      title: "Fax",
      dataIndex: "fax",
    },
    {
      width: 300,
      title: "Remarks",
      dataIndex: "remarks",
      render: (v: string) => cell(v),
    },
    {
      width: 100,
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
  ];
};
