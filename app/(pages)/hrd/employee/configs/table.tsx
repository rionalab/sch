import { Employee } from "../type";
import { Popover, Button, Dropdown, Tag, MenuProps } from "antd";
import TableDetail from "../components/table/table-detail";
import { dMY } from "@/helpers";
import { cell } from "@/libs/helpers/table";
import { Avatar } from "@/c";
import Link from "next/link";
import {
  PhoneOutlined,
  MailOutlined,
  EditOutlined,
  EllipsisOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { ColumnsType } from "antd/es/table";
import { red, green } from "@ant-design/colors";

const tableActions: MenuProps["items"] = [
  {
    key: "1",
    icon: <EditOutlined />,
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Edit
      </a>
    ),
  },
  {
    key: "2",
    danger: true,
    icon: <DeleteOutlined />,
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Delete
      </a>
    ),
  },
];

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
  // {
  //   title: "Action",
  //   key: "operation",
  //   fixed: "right",
  //   align: "center",
  //   width: 100,
  //   render: () => (
  //     <Dropdown menu={{ items: tableActions }} placement="bottomRight" arrow>
  //       <Button size="small">
  //         <EllipsisOutlined />
  //       </Button>
  //     </Dropdown>
  //   ),
  // },
];
