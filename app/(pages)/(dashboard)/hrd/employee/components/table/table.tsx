"use client";

import { DataTable } from "@/c";
import useRole from "@/hooks/useRole";
import { useTable } from "@/hooks/useTable";
import type { ColumnsType } from "antd/es/table";
import { destroy } from "../../action";
import { type Employee } from "../../type";
import { columns } from "./columns";
import LeaveEntitlement from "./leave-entitlement";

interface Props {
  rows: Employee[];
}

type DtColumns = ColumnsType<Record<string, any>>;

function Table({ rows }: Props) {
  const { allowDelete, allowCreate, allowEdit } = useRole("hr_employee");
  const tableProps = useTable<Employee>({ rows });

  return (
    <>
      <DataTable
        antdProps={{
          scroll: { x: 1600, y: 555 },
        }}
        filter={true}
        create={allowCreate}
        download={true}
        columns={columns as DtColumns}
        {...tableProps}
        actions={{
          others: [<LeaveEntitlement key={1} />],
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
