import { Employee } from "../type";
import { Button, Dropdown, MenuProps } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { ColumnsType } from "antd/es/table";
import { Prisma } from "@prisma/client";
import { cellPositionCategory } from "@/libs/helpers";

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

export const columns: ColumnsType<Prisma.PositionCreateInput> = [
  {
    title: "No",
    width: 80,
    dataIndex: "no",
  },
  {
    title: "Position",
    dataIndex: "name",
    sorter: (a, b) => (a.name > b.name ? -1 : 1),
  },
  {
    title: "Category",
    dataIndex: "category",
    render: (v) => cellPositionCategory(v),
    sorter: (a, b) => (a.name > b.name ? -1 : 1),
  },
  {
    title: "Action",
    key: "operation",
    fixed: "right",
    align: "center",
    width: 100,
    render: () => (
      <>
        <Button type="text" icon={<EditOutlined />}></Button>
        <Button type="text" icon={<DeleteOutlined />}></Button>
      </>
      // <Dropdown menu={{ items: tableActions }} placement="bottomRight" arrow>
      //   <Button size="small">
      //     <EllipsisOutlined />
      //   </Button>
      // </Dropdown>
    ),
  },
];
