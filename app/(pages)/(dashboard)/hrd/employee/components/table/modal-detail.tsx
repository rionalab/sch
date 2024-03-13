"use client";

import { Avatar } from "@/c";
import useToggle from "@/hooks/usePopup";
import React from "react";
import { Modal } from "antd";
import TableDetail from "./table-detail";
import type { Employee } from "../../type";

interface Props {
  image: string;
  row: Employee;
  title: string;
}

function ModalDetail({ image, row, title }: Props) {
  const { status, setTrue, setFalse } = useToggle();

  return (
    <>
      <Modal
        okButtonProps={{ style: { display: "none" } }}
        closeIcon={false}
        open={status}
        cancelText="Close"
        width={700}
        onCancel={setFalse}
      >
        <TableDetail data={row} />
      </Modal>

      <div
        onClick={() => {
          setTrue();
        }}
      >
        <Avatar hover image={image} title={title} />
      </div>
    </>
  );
}

export default ModalDetail;
