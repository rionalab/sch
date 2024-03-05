"use client";

import React from "react";
import type { ColumnsType } from "antd/es/table";
import { DataTable } from "@/c";
import { columns } from "./columns";
import { removeVendor } from "../../action";
import { useTable } from "@/hooks/useTable";
import useRole from "@/hooks/useRole";

interface Props {
  rows: any[];
}

type DtColumns = ColumnsType<Record<string, any>>;

function Table({ rows }: Props) {
  const { allowDelete, allowCreate, allowEdit } = useRole("vendor");
  const tableProps = useTable<any[]>({ rows });

  return (
    <>
      <DataTable
        filter={true}
        create={allowCreate}
        download={true}
        antdProps={{
          scroll: { x: 1300, y: 1111 },
        }}
        columns={columns() as DtColumns}
        {...tableProps}
        actions={{
          destroy: !allowDelete
            ? undefined
            : async (id: number) => {
                await removeVendor(id);
              },
          edit: allowEdit,
        }}
      />
    </>
  );
}

export default Table;
