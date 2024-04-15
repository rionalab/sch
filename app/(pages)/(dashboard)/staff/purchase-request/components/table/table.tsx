"use client";

import { DataTable, TableAction } from "@/c";
import useRole from "@/hooks/useRole";
import { useTable } from "@/hooks/useTable";
import { clg } from "@/libs/helpers";
import { UserSession } from "@/types";
import type { ColumnsType } from "antd/es/table";
import { useSession } from "next-auth/react";
import { approve, destroy } from "../../action";
import { columns } from "./columns";

interface Props {
  rows: any[];
}

type DtColumns = ColumnsType<Record<string, any>>;

function Table({ rows }: Props) {
  const { allowDelete, allowCreate, allowEdit, allowApprove } =
    useRole("staff_purchase");
  const tableProps = useTable<any[]>({ rows });
  const { data: session } = useSession();
  const userSession = session?.user as unknown as UserSession;

  clg({ allowApprove });

  return (
    <>
      <DataTable
        antdProps={{
          scroll: { x: 1800, y: 555 },
        }}
        filter={true}
        create={allowCreate}
        download={true}
        columns={columns() as DtColumns}
        {...tableProps}
        actionsRender={(text, record) => {
          const isBelong =
            String(record.requesterId) === String(userSession?.id);

          const actions = {
            approve:
              !allowApprove || record.status === "approved"
                ? undefined
                : async (id: number) => {
                    await approve(id);
                  },
            edit: allowEdit && isBelong,
            destroy:
              !allowDelete || !isBelong
                ? undefined
                : async (id: number) => {
                    await destroy(id);
                  },
          };

          return (
            <>
              <TableAction row={record} id={record.id} {...actions} />
            </>
          );
        }}
      />
    </>
  );
}

export default Table;
