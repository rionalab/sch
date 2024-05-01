"use client";

import { urls } from "@/consts";
import { c } from "@/libs/helpers";
import { Prisma } from "@prisma/client";
import { Button, Table } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { index } from "./action";
import styles from "./styles.module.scss";

function Page() {
  const [rows, setRows] = useState<Prisma.DocumentsCreateInput[]>([]);
  const router = useRouter();
  const fetchData = async () => {
    const dbData = await index();
    setRows(dbData);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
      title: "Information",
      dataIndex: "remarks",
      key: "information",
      ellipsis: true,
    },
    {
      title: "Price",
      dataIndex: "price",
      width: 150,
      key: "price",
      render: (a: any, row: any) => {
        return row?.isPaid ? c(row.price) : "Free";
      },
    },

    {
      title: "Action",
      dataIndex: "action",
      width: 100,
      key: "action",
      render: (a: any, row: any) => {
        return (
          <Button
            onClick={() => {
              router.push(urls.admission.formsDetail(row.id));
            }}
            size="small"
          >
            Buy
          </Button>
        );
      },
    },
  ];

  return (
    <div className={styles.container}>
      <br />
      <div className={`${styles.container}  post `}>
        <h3>Forms</h3>
        <h4 style={{ width: "70%" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          temporibus di. Hic ex quam nostrum blanditiis impedit, aliquam quia.
        </h4>
        <Table size="small" dataSource={rows} columns={columns} />
      </div>
    </div>
  );
}

export default Page;
