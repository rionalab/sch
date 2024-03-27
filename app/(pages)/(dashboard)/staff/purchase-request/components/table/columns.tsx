/* eslint-disable no-constant-condition */
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
      render: (v, w: Prisma.PurchaseRequestCreateInput) => {
        console.log(w);
        return (
          <>
            <ModalDetail code={w.code} items={w.items as any[]} label={v} />
          </>
        );
      },
    },

    // {
    //   title: "vendor",
    //   dataIndex: "vendor",
    //   width: 170,
    //   render: (v) => v.name,
    // },
    {
      title: "status",
      width: 110,
      dataIndex: "status",
      render: (v) => <TagPurchase status={v} />,
    },
    {
      title: "department",
      dataIndex: "department",
      width: 200,
      render: (v, w) => {
        // @ts-expect-error asd
        return w?.department?.name ?? "None";
      },
    },
    {
      title: "remarks",
      dataIndex: "remarks",
      ellipsis: true,
      width: 300,
    },

    {
      title: "Total",
      // align: "right",
      width: 150,
      render: (v, w: Prisma.PurchaseRequestCreateInput) => {
        if (w.status === "pending") {
          return "-";
        }

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
      width: 150,
      title: "payment",
      dataIndex: "payment",
      render: (v, row) => {
        if (row.status === "pending") {
          return "-";
        }

        return v;
      },
    },
    {
      width: 180,
      title: "purchase date",
      dataIndex: "purchaseDate",
      render: (v, row) => {
        if (row.status === "pending") {
          return "-";
        }

        return dMY(v);
      },
    },
    {
      width: 180,
      title: "Delivery date",
      dataIndex: "deliveryDate",
      render: (v, row) => {
        if (row.status === "pending") {
          return "-";
        }

        return dMY(v);
      },
    },
  ];
};
