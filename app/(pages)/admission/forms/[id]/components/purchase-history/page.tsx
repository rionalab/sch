import useToggle from "@/hooks/usePopup";
import { c, dMYHis } from "@/libs/helpers";
import { Prisma } from "@prisma/client";
import { Modal, Table } from "antd";

function PurchaseHistory({ data }: { data: Prisma.ParentFormCreateInput[] }) {
  const { status, setTrue, setFalse } = useToggle();

  function handleOk(): void {
    setFalse();
  }

  const dataSource = data.map((row, i) => ({
    key: i,
    ...row,
  }));

  const columns = [
    {
      title: "Date",
      dataIndex: "createdAt",
      key: "date",
      render: (v: any) => {
        return dMYHis(v);
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (v: any) => {
        return c(v);
      },
    },
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Used",
      dataIndex: "isUsed",
      key: "used",
      render: (v: boolean) => {
        return v ? "Yes" : "No";
      },
    },
  ];

  return (
    <>
      <button onClick={setTrue} className="custom aqua">
        Show Purchasement
      </button>

      <Modal
        title="Purchasement History"
        open={status}
        okText="Close"
        onOk={handleOk}
        cancelButtonProps={{
          style: {
            display: "none",
          },
        }}
        forceRender
      >
        <br />
        <p>
          <b>Available Form: {data.filter((row) => !row.isUsed).length}</b>
        </p>
        <Table size="small" dataSource={dataSource} columns={columns} />
      </Modal>
    </>
  );
}

export default PurchaseHistory;
