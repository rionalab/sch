"use client";

import { useState } from "react";
import { Space, Button, Modal, Flex } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { TableActions } from "@/types";
import styles from "./style.module.scss";
import { notifDestroyError, notifDestroySuccess } from "@/consts";
import { unstable_noStore as noStore } from "next/cache";
import { useAntdContext } from "@/contexts";

interface Props extends TableActions {
  id: number;
}

function TableAction(props: Props) {
  const { edit, destroy, id } = props;
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const { api } = useAntdContext();
  const handleCancel = () => {
    setOpen(false);
  };

  const handleDestroy = async () => {
    noStore();
    try {
      setLoading(true);
      await destroy?.(id);
      setOpen(false);
      api?.success(notifDestroySuccess());
    } catch (e: any) {
      api?.error(notifDestroyError(e.message));
    }
  };

  const confirmDestroy = () => {
    setOpen(true);
    setLoading(false);
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
            // onClick={showConfirm}
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

export default TableAction;
