import { Table } from "antd";

interface Props {
  data?: any[];
}

const columns = [
  {
    title: "Name",
    key: "name",
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
    key: "quantity",
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
    key: "remarks",
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
