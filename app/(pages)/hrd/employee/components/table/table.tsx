"use client";

import React from "react";
import type { ColumnsType } from "antd/es/table";
import { type Employee } from "../../type";
import { DataTable } from "@/c";
import { columns } from "./columns";
import { destroy } from "../../action";
import { useTable } from "@/hooks/useTable";
import LeaveEntitlement from "./leave-entitlement";

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
          others: [<LeaveEntitlement key={1} />],
          destroy: async (id: number) => {
            await destroy(id);
          },
          edit: true,
        }}
      />
    </>
  );
}

export default Table;
