"use client";

import React from "react";
import { Table as TableAntd, Popover, Button, Dropdown } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Employee } from "../type";
import {
  PhoneOutlined,
  MailOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import { Avatar } from "@/c";
import { cell } from "@/libs/helpers/table";
import Link from "next/link";
import { dMY } from "@/libs/helpers/date";
import TableDetail from "./table-detail";
import type { MenuProps } from "antd";

interface Props {
  data: Employee[];
}

const items: MenuProps["items"] = [
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

function Table({ data }: Props) {
  const columns: ColumnsType<Employee> = [
    {
      title: "Name",
      dataIndex: "firstName",
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
    },
    {
      title: "Hire Date",
      width: 130,
      dataIndex: "hireDate",
      render: (v) => dMY(v),
    },
    {
      title: "Birth",
      dataIndex: "dob",
      render: (v, row) => `${row.placeOfBirth}, ${dMY(v)}`,
    },
    {
      title: "Gender",
      dataIndex: "gender",
      width: 100,
    },
    {
      title: "Email",
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
        <Dropdown menu={{ items }} placement="bottomRight" arrow>
          <Button size="small">
            <EllipsisOutlined />
          </Button>
        </Dropdown>
      ),
    },
  ];

  return (
    <>
    <Flex
      <Button>+ Create New</Button>
      <TableAntd
        dataSource={data}
        size="small"
        columns={columns}
        scroll={{ x: 1500, y: 555 }}
      />
    </>
  );
}

export default Table;
