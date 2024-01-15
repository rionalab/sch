"use client";

import React from "react";
import type { ColumnsType } from "antd/es/table";
import { Employee } from "../type";
import { DataTable } from "@/c";
import { columns } from "../configs/table";
import useTable from "@/hooks/useTable";

interface Props {
  rows: Employee[];
}

type DtColumns = ColumnsType<Record<string, any>>;

function Table({ rows }: Props) {
  const tableProps = useTable<Employee>({ rows });

  return (
    <>
      <DataTable
        filter={true}
        download={true}
        columns={columns as DtColumns}
        {...tableProps}
      />
    </>
  );
}

export default Table;
