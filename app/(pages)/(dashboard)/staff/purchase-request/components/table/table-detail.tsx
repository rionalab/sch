import React from "react";
import { c } from "@/libs/helpers";
import { Table } from "antd";
import { useSession } from "next-auth/react";
import { auth } from "@/app/api/auth/[...nextauth]/options";

interface Props {
  data?: any[];
}

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    render: (v: any, w: any) => {
      return w?.inventory?.name ?? "-";
    },
  },
  // {
  //   title: "Price",
  //   dataIndex: "unitPrice",
  //   render: (v: any, w: any) => c(v),
  // },
  {
    title: "Quantity",
    dataIndex: "quantity",
    render: (v: any, w: any) => {
      return `${v} ${w?.uom?.acronym ?? ""}`;
    },
  },
  // {
  //   title: "Sub Total",
  //   dataIndex: "subtotal",
  //   render: (v: any, w: any) => c(w.unitPrice * w.quantity),
  // },
  {
    title: "Remarks",
    ellipsis: true,
    dataIndex: "remarks",
  },
];

function TableDetail({ data = [] }: Props) {
  return (
    <div>
      <Table columns={columns} dataSource={data || []} size="small" />
    </div>
  );
}

export default TableDetail;
