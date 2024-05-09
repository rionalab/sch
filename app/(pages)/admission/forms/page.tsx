"use client";

import { urls } from "@/consts";
import { c } from "@/libs/helpers";
import { Prisma } from "@prisma/client";
import { Button, Table } from "antd";
import type { SizeType } from "antd/es/config-provider/SizeContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { index, owned } from "./action";
import styles from "./styles.module.scss";

function Page() {
  const [rows, setRows] = useState<Prisma.DocumentsCreateInput[]>([]);
  const router = useRouter();
  const [loading, setLoading] = useState<string>("");

  const init = async (id: number) => {
    const list = await index();
    const listOwned = await owned(id);

    setRows(
      list.map((document, i) => {
        const totalOwnedDoc = listOwned.filter(
          (list) => list.documentId === document.id,
        );

        const availableDoc = totalOwnedDoc.filter((doc) => !doc.isUsed);

        return {
          ...document,
          totalOwnedDoc: totalOwnedDoc.length,
          availableDoc: availableDoc.length,
          key: i,
        };
      }),
    );
  };

  const handleBuy = (id: string) => {
    setLoading(`buy|${id}`);
    router.push(urls.admission.formsDetail(id));
  };

  function handleUse(id: any) {
    router.push(urls.admission.formsDetail(String(id)));
  }

  useEffect(() => {
    const id = localStorage.getItem("auth");
    void init(Number(id));
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
      width: 100,
      title: "Owned",
      dataIndex: "owned",
      key: "owned",
      render: (v: any, row: any) => {
        if (!row.isPaid) {
          return <span style={{ fontSize: 18 }}>∞</span>;
        }

        return `${row.availableDoc}/${row.totalOwnedDoc}`;
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
      width: 122,
      key: "action",
      render: (a: any, row: any) => {
        const btnAttr = (type: "use" | "buy") => ({
          size: "small" as SizeType,
          className: "custom table mb4 " + (type === "use" ? "aqua" : "yellow"),
          disabled: Boolean(loading),
          block: true,
        });

        return (
          <Button {...btnAttr("use")} onClick={() => handleUse(row.id)}>
            Show
          </Button>
        );
      },
    },
  ];

  return (
    <div className={styles.container}>
      <div className={`${styles.container}  post `}>
        <h3>Forms</h3>
        <h4 style={{ width: "70%" }}>
          Below is a list of documents that can be used; some require payment to
          initiate their usage.
        </h4>
        <Table size="small" dataSource={rows} columns={columns} />
      </div>
    </div>
  );
}

export default Page;
