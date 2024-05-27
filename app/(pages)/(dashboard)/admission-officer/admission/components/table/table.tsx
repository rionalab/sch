"use client";

import { DataTable } from "@/c";
import useToggle from "@/hooks/usePopup";
import useRole from "@/hooks/useRole";
import { useTable } from "@/hooks/useTable";
import type { ColumnsType } from "antd/es/table";
import { useState } from "react";
import { destroy } from "../../action";
import { type StudentRegistration } from "../../type";
import ModalInterview from "../modal-interview";
import { columns } from "./columns";
interface Props {
  rows: StudentRegistration[];
}

type DtColumns = ColumnsType<Record<string, any>>;

function Table({ rows }: Props) {
  const { allowDelete, allowCreate, allowEdit } = useRole("ao_admission");
  const tableProps = useTable<StudentRegistration>({ rows });
  const modalInterview = useToggle();
  const [dataInterview, setDataInterview] = useState<StudentRegistration>();

  return (
    <>
      <ModalInterview
        data={dataInterview}
        open={modalInterview.status}
        openModal={modalInterview.setTrue}
        closeModal={modalInterview.setFalse}
      />

      <DataTable
        antdProps={{
          scroll: { x: 1600, y: 555 },
        }}
        filter={true}
        create={allowCreate}
        download={true}
        columns={columns as DtColumns}
        {...tableProps}
        actionsAsDropdown={true}
        actions={{
          others: [
            {
              label: "Interview & Verification",
              onClick: (row: any) => {
                setDataInterview(row);
                modalInterview.setTrue();
              },
              key: "intver",
            },
          ],
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
