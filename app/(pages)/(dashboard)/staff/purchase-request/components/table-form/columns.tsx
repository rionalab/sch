import { c } from "@/libs/helpers";
import { Button } from "antd";
import {
  ExclamationCircleFilled,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

export const columns = (handleDelete: (id: number) => void) => [
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
      console.log(2222, v, w);
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
      return (
        <>
          <Button
            onClick={() => {
              alert("Edit");
            }}
            size="small"
            type="text"
            icon={<EditOutlined style={{ fontSize: 14 }} />}
          />

          <Button
            onClick={() => {
              handleDelete(Number(row.id));
            }}
            size="small"
            type="text"
            icon={<DeleteOutlined style={{ fontSize: 14 }} />}
          />
        </>
      );
    },
  },
];
