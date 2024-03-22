"use client";

import { Button, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import useToggle from "@/hooks/usePopup";
import FormPurchasedItem from "../form-purchase-item";

function ModalAddPurchaseItem() {
  const { status, setTrue, setFalse } = useToggle();

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
        <FormPurchasedItem closeModal={setFalse} />
      </Modal>
      <Button
        onClick={() => {
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

export default ModalAddPurchaseItem;
