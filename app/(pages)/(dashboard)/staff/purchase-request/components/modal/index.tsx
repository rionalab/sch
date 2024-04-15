"use client";

import { Button, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import FormPurchasedItem from "../form-modal";
import type { VoidMethod } from "@/types";
import type { Dispatch, SetStateAction } from "react";
import { useGlobalStore } from "@/libs/zustand/StoreProvider";

interface Props {
  status: boolean;
  setFalse: VoidMethod;
  setTrue: VoidMethod;
  idEdit: string | null;
  setIdEdit: Dispatch<SetStateAction<string | null>>;
}

function ModalFormItem({
  status,
  idEdit,
  setIdEdit,
  setFalse,
  setTrue,
}: Props) {
  return (
    <div>
      <Modal
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
        closeIcon={false}
        open={status}
        destroyOnClose
        width={700}
        onCancel={setFalse}
      >
        <FormPurchasedItem idEdit={idEdit} closeModal={setFalse} />
      </Modal>
      <Button
        onClick={() => {
          setIdEdit(null);
          setTrue();
        }}
        icon={<PlusOutlined />}
        style={{ width: 180 }}
        size="small"
      >
        Add Purchase Item
      </Button>
    </div>
  );
}

export default ModalFormItem;
