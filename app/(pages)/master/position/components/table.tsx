"use client";

import React from "react";
import type { ColumnsType } from "antd/es/table";
import { Employee } from "../type";
import { DataTable } from "@/c";
import { columns } from "../configs/table";
import useTable from "@/hooks/useTable";
import { Prisma } from "@prisma/client";

interface Props {
  rows: Prisma.PositionCreateInput[];
}

type DtColumns = ColumnsType<Record<string, any>>;

function Table({ rows }: Props) {
  const tableProps = useTable<Prisma.PositionCreateInput>({ rows });

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
