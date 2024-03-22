import { type ColumnsType } from "antd/es/table";
import { type Prisma } from "@prisma/client";
import { c, dMY } from "@/libs/helpers";
import { TagPurchase } from "@/c";
import ModalDetail from "./modal";

export const columns = (): ColumnsType<Prisma.PurchaseRequestCreateInput> => {
  return [
    {
      title: "No",
      width: 80,
      dataIndex: "no",
    },
    {
      width: 200,
      title: "Code",
      dataIndex: "code",
    },

    {
      width: 110,
      title: "payment",
      dataIndex: "payment",
    },
    {
      title: "vendor",
      dataIndex: "vendor",
      width: 170,
      render: (v) => v.name,
    },
    {
      title: "status",
      width: 70,
      dataIndex: "status",
      render: (v) => <TagPurchase status={v} />,
    },
    {
      title: "Total",
      align: "right",
      width: 120,
      render: (v, w: Prisma.PurchaseRequestCreateInput) => {
        const row = (w.items ?? []) as unknown as Array<{
          quantity: number;
          totalPrice: number;
        }>;

        const total = (row || []).reduce((a, c: any) => {
          return a + Number(c.totalPrice);
        }, 0);

        return (
          <ModalDetail
            code={w.code}
            items={w.items as any[]}
            label={c(total)}
          />
        );
      },
    },
    {
      width: 140,
      title: "purchase date",
      dataIndex: "purchaseDate",
      render: (v) => dMY(v),
    },
    {
      width: 140,
      title: "Delivery date",
      dataIndex: "deliveryDate",
      render: (v) => dMY(v),
    },

    {
      title: "remarks",
      dataIndex: "remarks",
      ellipsis: true,
      width: 300,
    },
  ];
};
