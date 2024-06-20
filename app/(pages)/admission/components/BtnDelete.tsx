import React from "react";
import type { PopconfirmProps } from "antd";
import { Button, message, Popconfirm } from "antd";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

interface Props {
  onConfirm: () => void;
}

function BtnDelete({ onConfirm }: Props) {
  return (
    <>
      <Popconfirm
        title="Delete data"
        description="Are you sure to delete this data?"
        onConfirm={onConfirm}
        okText="Yes"
        cancelText="No"
      >
        <Button
          type="primary"
          icon={<DeleteOutlined />}
          size="small"
          danger
        ></Button>
      </Popconfirm>
    </>
  );
}

export default BtnDelete;
