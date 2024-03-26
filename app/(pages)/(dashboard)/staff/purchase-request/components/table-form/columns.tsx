import { c } from "@/libs/helpers";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import { type VoidMethod } from "@/types";
import type { Dispatch, SetStateAction } from "react";

interface ColumnsParams {
  setTrue: VoidMethod;
  setIdEdit: Dispatch<SetStateAction<string | null>>;
}

export const columns = ({ setTrue, setIdEdit }: ColumnsParams) => [
  {
    title: "no",
    dataIndex: "no",
    key: "no",
    width: 80,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Price",
    dataIndex: "unitPrice",
    key: "unitPrice",
    render: (v: any, w: any) => c(v),
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
    render: (v: any, w: any) => {
      return `${v} ${w?.uomId.split("|")[1]}`;
    },
  },
  {
    title: "Sub Total",
    dataIndex: "subtotal",
    key: "subtotal",
    render: (v: any, w: any) => c(w.unitPrice * w.quantity),
  },
  {
    title: "Remarks",
    ellipsis: true,
    dataIndex: "remarks",
    key: "remarks",
  },
  {
    key: "Actions",
    title: "Actions",
    render: (row: any) => {
      const id = row.id;

      return (
        <>
          <EditButton setIdEdit={setIdEdit} setTrue={setTrue} id={id} />
          <DeleteButton id={id} />
        </>
      );
    },
  },
];
