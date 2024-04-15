"use client";

import React from "react";
import { Modal } from "antd";
import useToggle from "@/hooks/usePopup";
import TableDetail from "./table-detail";

interface Props {
  label: string;
  code: string;
  items?: any[];
}

function ModalDetail({ code, label, items }: Props) {
  const { status, setTrue, setFalse } = useToggle();

  return (
    <>
      <Modal
        okButtonProps={{ style: { display: "none" } }}
        closeIcon={false}
        open={status}
        cancelText="Close"
        width={800}
        title={code}
        onCancel={setFalse}
      >
        <TableDetail data={items} />
      </Modal>

      <div
        onClick={() => {
          setTrue();
        }}
      >
        <span className={`textLink`}>{label}</span>
      </div>
    </>
  );
}

export default ModalDetail;
