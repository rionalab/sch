"use client";

import { DataTable } from "@/c";
import useRole from "@/hooks/useRole";
import { useTable } from "@/hooks/useTable";
import type { ColumnsType } from "antd/es/table";
import { destroy } from "../../action";
import { type StudentRegistration } from "../../type";
import { columns } from "./columns";
import LeaveEntitlement from "./leave-entitlement";

interface Props {
  rows: StudentRegistration[];
}

type DtColumns = ColumnsType<Record<string, any>>;

function Table({ rows }: Props) {
  const { allowDelete, allowCreate, allowEdit } = useRole("ao_admission");
  const tableProps = useTable<StudentRegistration>({ rows });

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
