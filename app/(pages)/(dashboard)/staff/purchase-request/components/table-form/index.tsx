import { Table } from "antd";
import ModalFormItem from "../modal";
import { useGlobalStore } from "@/libs/zustand/StoreProvider";
import { columns } from "./columns";
import useToggle from "@/hooks/usePopup";
import { useState } from "react";

function TableForm() {
  const { purchaseRequestItem } = useGlobalStore((state: any) => state);
  const { status, setTrue, setFalse } = useToggle();
  const [idEdit, setIdEdit] = useState<null | string>(null);

  // add necessary properties
  const dataSource = (purchaseRequestItem ?? []).map((row: any, i: any) => ({
    no: i + 1,
    ...row,
  }));

  return (
    <div>
      <ModalFormItem
        idEdit={idEdit}
        setIdEdit={setIdEdit}
        status={status}
        setTrue={setTrue}
        setFalse={setFalse}
      />
      <br />
      <Table
        columns={columns({ setTrue, setIdEdit })}
        dataSource={dataSource}
        size="small"
      />
    </div>
  );
}

export default TableForm;
