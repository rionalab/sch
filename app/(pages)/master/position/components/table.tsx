"use client";

import React from "react";
import type { ColumnsType } from "antd/es/table";
import { DataTable } from "@/c";
import { columns } from "../configs/table";
import { useTable } from "@/hooks";
import { destroy } from "../action";
import { wait } from "@/libs/helpers";
// import { useAntdContext } from "@/contexts";

interface Props {
  rows: prisma.PositionCreateInput[];
}

type DtColumns = ColumnsType<Record<string, any>>;

function Table({ rows }: Props) {
  const tableProps = useTable<prisma.PositionCreateInput>({ rows });

  // const something = useAntdContext();
  // console.log({ something });

  const handleEdit = () => {
    alert("edit");
  };

  const testDelete = async () => {
    await wait();
  };

  return (
    <>
      <DataTable
        filter={true}
        download={true}
        columns={columns() as DtColumns}
        {...tableProps}
        actions={{
          destroy: (id: number) => destroy(id),
          edit: handleEdit,
        }}
      />
    </>
  );
}

export default Table;
