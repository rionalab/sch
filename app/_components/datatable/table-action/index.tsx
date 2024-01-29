"use client";

import { useState } from "react";
import { Space, Button, Modal, Flex } from "antd";
import {
  ExclamationCircleFilled,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { type TableActions } from "@/types";
import styles from "./style.module.scss";
import { notifDestroyError, notifDestroySuccess, urls } from "@/consts";
import { useAntdContext } from "@/contexts";
import { useRouter } from "next/navigation";

interface Props extends TableActions {
  id: number;
}

export function TableAction(props: Props) {
  const { edit, destroy, id } = props;
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const { api } = useAntdContext();
  const handleCancel = () => {
    setOpen(false);
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

  const confirmDestroy = () => {
    setOpen(true);
    setLoading(false);
  };

  const handleEdit = () => {
    router.push(urls.master.position.edit(id));
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

      <Space size={2}>
        {props.edit && (
          <Button
            onClick={handleEdit}
            size="small"
            type="text"
            icon={<EditOutlined style={{ fontSize: 14 }} />}
          />
        )}
        {props.destroy && (
          <Button
            onClick={confirmDestroy}
            size="small"
            type="text"
            icon={<DeleteOutlined style={{ fontSize: 14 }} />}
          />
        )}
      </Space>
    </>
  );
}
