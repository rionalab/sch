"use client";

import { Avatar } from "@/c";
import useToggle from "@/hooks/usePopup";
import { Modal } from "antd";
import type { StudentRegistration } from "../../type";
import TableDetail from "./table-detail";

interface Props {
  image: string;
  row: StudentRegistration;
  title: string;
}

function ModalDetailAdmission({ image, row, title }: Props) {
  const { status, setTrue, setFalse } = useToggle();

  return (
    <>
      <Modal
        okButtonProps={{ style: { display: "none" } }}
        closeIcon={false}
        open={status}
        cancelText="Close"
        width={900}
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

export default ModalDetailAdmission;
