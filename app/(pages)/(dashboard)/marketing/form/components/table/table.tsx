"use client";

import { DataTable } from "@/c";
import useRole from "@/hooks/useRole";
import { useTable } from "@/hooks/useTable";
import { ModuleName } from "@/types";
import type { ColumnsType } from "antd/es/table";
import { destroy } from "../../action";
import { role } from "../../configs";
import { columns } from "./columns";

interface Props {
  rows: any[];
}

type DtColumns = ColumnsType<Record<string, any>>;

function Table({ rows }: Props) {
  const { allowDelete, allowCreate, allowEdit } = useRole(role as ModuleName);
  const tableProps = useTable<any[]>({ rows });

  return (
    <>
      <DataTable
        filter={true}
        antdProps={{
          scroll: { x: 1500, y: 555 },
        }}
        create={allowCreate}
        download={true}
        columns={columns() as DtColumns}
        {...tableProps}
        actions={{
          destroy: !allowDelete
            ? undefined
            : async (id: number) => {
                await destroy(id);
              },
          edit: allowEdit,
        }}
      />
    </>
  );
}

export default Table;
