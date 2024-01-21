import React from "react";
import { Modal } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";

interface ConfirmDestroy {
  onOk?: () => void;
  onCancel?: () => void;
}

export function useConfirm() {
  // const { confirm } = Modal;

  // const confirmDestroy = ({ onOk, onCancel }: ConfirmDestroy) => {
  //   confirm({
  //     title: "Are you sure delete this data?",
  //     icon: <ExclamationCircleFilled />,
  //     content: "This action cant be undone",
  //     okText: "Delete",
  //     okType: "danger",
  //     cancelText: "No",
  //     onOk: () => {
  //       if (onOk) {
  //         return new Promise(async (res, rej) => {
  //           await onOk();
  //           return res({ success: true });
  //         }).catch(() => {
  //           Modal.destroyAll();
  //           alert("error  delete");
  //         });
  //       }
  //     },
  //     onCancel() {
  //       onCancel && onCancel();
  //     },
  //   });
  // };

  return {
    // confirmDestroy,
  };
}
