"use client";

import React from "react";
import type { ColumnsType } from "antd/es/table";
import { DataTable } from "@/c";
import { columns } from "../configs/table";
import { useTable } from "@/hooks";
import { destroy } from "../action";

interface Props {
  rows: any[];
}

type DtColumns = ColumnsType<Record<string, any>>;

function Table({ rows }: Props) {
  const tableProps = useTable<any[]>({ rows });

  const handleEdit = () => {
    alert("edit");
  };

  return (
    <>
      <DataTable
        filter={true}
        download={true}
        columns={columns() as DtColumns}
        {...tableProps}
        actions={{
          destroy: async (id: number) => {
            await destroy(id);
          },
          edit: handleEdit,
        }}
      />
    </>
  );
}

export default Table;
