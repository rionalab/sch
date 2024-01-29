"use client";

import React from "react";
import type { ColumnsType } from "antd/es/table";
import { type Employee } from "../../type";
import { DataTable } from "@/c";
import { columns } from "../../configs/table";
import { useTable } from "@/hooks";

interface Props {
  rows: Employee[];
}

type DtColumns = ColumnsType<Record<string, any>>;

function Table({ rows }: Props) {
  const tableProps = useTable<Employee>({ rows });

  return (
    <>
      <DataTable
        antdProps={{
          scroll: { x: 1600, y: 555 },
        }}
        filter={true}
        download={true}
        columns={columns as DtColumns}
        {...tableProps}
        actions={{
          destroy: async (id: number) => {},
          edit: () => null,
        }}
      />
    </>
  );
}

export default Table;
