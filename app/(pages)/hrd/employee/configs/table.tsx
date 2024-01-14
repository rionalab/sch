import { Employee } from "../type";
import { Popover, Button, Dropdown, MenuProps } from "antd";
import TableDetail from "../components/table-detail";
import { fnDate } from "@/helpers";
import { cell } from "@/libs/helpers/table";
import { Avatar } from "@/c";
import Link from "next/link";
import {
  PhoneOutlined,
  MailOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import { ColumnsType } from "antd/es/table";

const tableActions: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    ),
  },
];

export const columns: ColumnsType<Employee> = [
  {
    title: "Name",
    dataIndex: "firstName",
    width: 250,
    fixed: "left",
    render: (val, row) => {
      return (
        <Popover content={<TableDetail data={row} />}>
          <>
            <Avatar
              hover
              image={row.photo}
              title={`${row.firstName} ${row.lastName}`}
            />
          </>
        </Popover>
      );
    },
    sorter: (a, b) => (a.firstName > b.firstName ? -1 : 1),
  },
  {
    title: "Hire Date",
    width: 130,
    dataIndex: "hireDate",
    render: (v) => fnDate.dMY(v),
  },
  {
    title: "Birth",
    width: 200,
    dataIndex: "dob",
    render: (v, row) => `${row.placeOfBirth}, ${fnDate.dMY(v)}`,
  },
  {
    title: "Gender",
    dataIndex: "gender",
    width: 100,
    sorter: (a, b) => a.gender.length - b.gender.length,
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
    title: "Religion",
    width: 130,
    dataIndex: "religion",
  },
  {
    title: "Tribe",
    width: 130,
    dataIndex: "tribe",
    render: (v) => cell(v),
  },
  {
    width: 90,
    title: "Blood Type",
    dataIndex: "bloodType",
    render: (v) => cell(v),
  },
  {
    title: "Action",
    key: "operation",
    fixed: "right",
    align: "center",
    width: 100,
    render: () => (
      <Dropdown menu={{ items: tableActions }} placement="bottomRight" arrow>
        <Button size="small">
          <EllipsisOutlined />
        </Button>
      </Dropdown>
    ),
  },
];
