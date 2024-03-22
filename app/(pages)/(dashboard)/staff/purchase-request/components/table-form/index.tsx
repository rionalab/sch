import { Table } from "antd";
import ModalFormItem from "../modal-add-purchase-item";
import { useGlobalStore } from "@/libs/zustand/StoreProvider";
import { columns } from "./columns";

function TableForm() {
  const { purchaseRequestItem } = useGlobalStore((state: any) => state);

  // add necessary properties
  const dataSource = (purchaseRequestItem ?? []).map((row: any, i: any) => ({
    no: i + 1,
    ...row,
  }));

  const deleteTableItem = (id: number) => {
    alert("DElete : " + id);
  };

  return (
    <div>
      <ModalFormItem />
      <br />
      <Table
        columns={columns(deleteTableItem)}
        dataSource={dataSource}
        size="small"
      />
    </div>
  );
}

export default TableForm;
