import React from "react";
import { Button, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useGlobalStore } from "@/libs/zustand/StoreProvider";

function DeleteButton({ id }: { id: string }) {
  const { setPurchaseRequestItem } = useGlobalStore((state) => state);

  return (
    <>
      <Popconfirm
        title="Delete Item"
        description="Are you sure to delete this item?"
        onConfirm={() => {
          setPurchaseRequestItem("delete", id);
        }}
        okText="Yes"
        cancelText="No"
      >
        <Button
          size="small"
          type="text"
          icon={<DeleteOutlined style={{ fontSize: 14 }} />}
        />
      </Popconfirm>
    </>
  );
}

export default DeleteButton;
