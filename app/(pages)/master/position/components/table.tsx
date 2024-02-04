"use client";

import React from "react";
import type { ColumnsType } from "antd/es/table";
import { DataTable } from "@/c";
import { columns } from "../configs/table";
import { removePosition } from "../action";
import { useTable } from "@/hooks/useTable";

interface Props {
  rows: any[];
}

type DtColumns = ColumnsType<Record<string, any>>;

function Table({ rows }: Props) {
  const tableProps = useTable<any[]>({ rows });

  return (
    <>
      <DataTable
        filter={true}
        download={true}
        columns={columns() as DtColumns}
        {...tableProps}
        actions={{
          destroy: async (id: number) => {
            await removePosition(id);
          },
          edit: true,
        }}
      />
    </>
  );
}

export default Table;
