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
  status?: boolean;
  setTrue?: () => void;
  setFalse?: () => void;
}

function ModalDetailAdmission({
  image,
  status: statusProps,
  setFalse: setFalseProps,
  setTrue: setTrueProps,
  row,
  title,
}: Props) {
  const { status, setFalse, setTrue } = useToggle();

  return (
    <>
      <Modal
        okButtonProps={{ style: { display: "none" } }}
        closeIcon={false}
        open={statusProps || status}
        cancelText="Close"
        width={900}
        onCancel={() => {
          if (setFalseProps) {
            setFalseProps();
          } else {
            setFalse();
          }
        }}
      >
        <TableDetail data={row} />
      </Modal>

      <div
        onClick={() => {
          if (setTrueProps) {
            setTrueProps();
          } else {
            setTrue();
          }
        }}
      >
        <Avatar hover image={image} title={title} />
      </div>
    </>
  );
}

export default ModalDetailAdmission;
