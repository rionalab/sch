import { type Employee } from "../../type";
import { Popover, Tag } from "antd";
import TableDetail from "./table-detail";
import { dMY } from "@/helpers";
import { cell } from "@/libs/helpers/table";
import { Avatar } from "@/c";
import Link from "next/link";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";
import { type ColumnsType } from "antd/es/table";
import { red, green } from "@ant-design/colors";

export const columns: ColumnsType<Employee> = [
  {
    title: "Name",
    dataIndex: "fullName",
    width: 250,
    fixed: "left",
    render: (val, row) => {
      return (
        <Popover content={<TableDetail data={row} />}>
          <>
            <Avatar hover image={row.photo} title={`${row.fullName}`} />
          </>
        </Popover>
      );
    },
    sorter: (a, b) => (a.fullName > b.fullName ? -1 : 1),
  },
  {
    title: "NIP",
    width: 130,
    dataIndex: "NIP",
  },
  {
    title: "Status",
    width: 90,
    dataIndex: "contractStatus",
    render: (v) => {
      let color;
      if (v === "Active") {
        color = green[5];
      } else if (v === "Inactive") {
        color = red.primary;
      }

      return <Tag color={color}>{v}</Tag>;
    },
  },

  {
    title: "Unit",
    dataIndex: "unit",
    width: 210,
  },

  {
    title: "Hire Date",
    width: 130,
    dataIndex: "hireDate",
    render: (v) => dMY(v),
  },

  {
    title: "Email",
    width: 270,
    dataIndex: "email",
    render: (val) => {
      return (
        <Link href={`mailto:${val}`}>
          <MailOutlined />
          <span className="textLink">{val}</span>
        </Link>
      );
    },
  },
  {
    title: "Phone",
    width: 170,
    dataIndex: "phone1",
    render: (val) => {
      return (
        <>
          <PhoneOutlined />
          {val}
        </>
      );
    },
  },
  {
    title: "TMT",
    width: 120,
    dataIndex: "TMT",
    render: (v) => cell(dMY(v)),
  },
  {
    title: "PKWT",
    width: 220,
    dataIndex: "religion",
    render: (val, row) => {
      return [dMY(row.PKWTStart), dMY(row.PKWTEnd)].join(" - ");
    },
  },
  {
    title: "NIK",
    width: 210,
    dataIndex: "NIK",
  },
];
