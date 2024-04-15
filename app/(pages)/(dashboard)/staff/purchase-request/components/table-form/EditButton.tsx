import React from "react";
import type { Dispatch, SetStateAction } from "react";
import { Button } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { type VoidMethod } from "@/types";

interface Props {
  setTrue: VoidMethod;
  id: string;
  setIdEdit: Dispatch<SetStateAction<string | null>>;
}

function EditButton({ id, setIdEdit, setTrue }: Props) {
  return (
    <>
      <Button
        onClick={() => {
          setIdEdit(id);
          setTrue();
        }}
        size="small"
        type="text"
        icon={<EditOutlined style={{ fontSize: 14 }} />}
      />
    </>
  );
}

export default EditButton;
