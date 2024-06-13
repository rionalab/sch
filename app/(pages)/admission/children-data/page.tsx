"use client";

import { urls } from "@/consts";
import { c } from "@/libs/helpers";
import { Prisma } from "@prisma/client";
import { Button, Table } from "antd";
import type { SizeType } from "antd/es/config-provider/SizeContext";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import useParentData, { parentHasRegister } from "../helper";
import { LoadingModule } from "@/c";
import { faker } from "@faker-js/faker";

const rowsx = [
  { name: faker.person.fullName() },
  { name: faker.person.fullName() },
  { name: faker.person.fullName() },
];

function page() {
  const [rows, setRows] = useState<any[]>(rowsx);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (a: any, row: any) => {
        return <b style={{ fontWeight: 600 }}>{a}</b>;
      },
    },

    {
      title: "Unit",
      dataIndex: "unit",
      key: "unit",
      render: (a: any, row: any) => {
        return "Kindergarten";
      },
    },

    {
      title: "status",
      dataIndex: "status",
      key: "status",
      render: (a: any, row: any) => {
        return "Verification Data";
      },
    },

    {
      title: "Action",
      dataIndex: "action",
      width: 122,
      key: "action",
      render: (a: any, row: any) => {
        const btnAttr = (type: "use" | "buy") => ({
          size: "small" as SizeType,
          className: "custom table mb4 " + (type === "use" ? "aqua" : "yellow"),
          block: true,
        });

        return (
          <Button {...btnAttr("use")} onClick={() => null}>
            Action
          </Button>
        );
      },
    },
  ];

  return (
    <div className="post">
      <br />
      <br />
      <br />
      <h3>Children Data</h3>
      <Table size="small" dataSource={rows} columns={columns} />
    </div>
  );
}

export default page;
