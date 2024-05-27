"use client";

import {
  notifApproveError,
  notifApproveSuccess,
  notifDestroyError,
  notifDestroySuccess,
} from "@/consts";
import { useAntdContext } from "@/contexts";
import useToggle from "@/hooks/usePopup";
import { type TableActions } from "@/types";
import { CheckOutlined, ExclamationCircleFilled } from "@ant-design/icons";
import { Button, Flex, Modal } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import TableActionButton from "../table-action-button";
import TableActionDropdown from "../table-action-dropdown";
import styles from "./style.module.scss";

interface Props<T> extends TableActions {
  id: number;
  actionsAsDropdown?: boolean;
  row: T;
}

export function TableAction<T>(props: Props<T>) {
  const {
    edit,
    actionsAsDropdown = false,
    approve,
    id,
    destroy,
    others = [],
    row,
  } = props;

  console.log(props);

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const { api } = useAntdContext();
  const path = usePathname();
  const modalApprove = useToggle();

  const handleCancel = () => {
    setOpen(false);
  };

  const confirmApprove = () => {
    modalApprove.setTrue();
    setLoading(false);
  };

  const handleApprove = async () => {
    try {
      setLoading(true);
      await approve?.(id);
      api?.success(notifApproveSuccess());
    } catch (e: any) {
      api?.error(notifApproveError(String(e.message)));
    } finally {
      setLoading(false);
      modalApprove.setFalse();
    }
  };

  const confirmDestroy = () => {
    setOpen(true);
    setLoading(false);
  };

  const handleDestroy = async () => {
    try {
      setLoading(true);
      await destroy?.(id);
      api?.success(notifDestroySuccess());
    } catch (e: any) {
      api?.error(notifDestroyError(String(e.message)));
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  const handleEdit = () => {
    router.push(`${path}/edit/${id}`);
  };

  return (
    <>
      <Modal
        open={open}
        width={400}
        closable={false}
        onCancel={handleCancel}
        footer={[
          <Button key="back" disabled={loading} onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            danger
            loading={loading}
            onClick={handleDestroy}
          >
            Delete
          </Button>,
        ]}
        title={
          <Flex gap={8} align="center" className={styles.title}>
            <ExclamationCircleFilled className={styles.icon} />
            Delete Data
          </Flex>
        }
      >
        <p className={styles.description}>
          Do you want to proceed to delete this data?
        </p>
      </Modal>

      <Modal
        open={modalApprove.status}
        width={400}
        closable={false}
        onCancel={() => {
          modalApprove.setFalse();
        }}
        footer={[
          <Button
            key="back"
            disabled={loading}
            onClick={() => {
              modalApprove.setFalse();
            }}
          >
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleApprove}
          >
            Approve
          </Button>,
        ]}
        title={
          <Flex gap={8} align="center" className={styles.title}>
            <CheckOutlined className={styles.icon} />
            Approve Data
          </Flex>
        }
      >
        <p className={styles.description}>
          Do you want to proceed to approve this data?
        </p>
      </Modal>

      {actionsAsDropdown ? (
        <TableActionDropdown
          {...props}
          handleEdit={handleEdit}
          confirmDestroy={confirmDestroy}
          confirmApprove={confirmApprove}
        />
      ) : (
        <TableActionButton<T>
          {...props}
          handleEdit={handleEdit}
          confirmDestroy={confirmDestroy}
          confirmApprove={confirmApprove}
        />
      )}
    </>
  );
}
