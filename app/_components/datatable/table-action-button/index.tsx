import { CheckOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import React from "react";
import { TableActionsCmp } from "../type";
import styles from "./style.module.scss";

function TableActionButton<T>(props: TableActionsCmp<T>) {
  const {
    edit,
    confirmDestroy,
    confirmApprove,
    handleEdit,
    approve,
    destroy,
    others = [],
    row,
  } = props;

  return (
    <>
      <Space className={styles.btns} size={2}>
        {others.map((c, i) => {
          if (React.isValidElement(c)) {
            const originalOnClick = c.props.onClick;

            const handleClick = () => {
              console.log({ c });

              if (originalOnClick) {
                originalOnClick(row);
              }
            };

            // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion, @typescript-eslint/no-unsafe-argument
            return React.cloneElement(c, {
              key: i,
              onClick: handleClick,
            } as any);
          }

          return null;
        })}

        {edit && (
          <Button
            onClick={handleEdit}
            title="Edit"
            size="small"
            type="text"
            icon={<EditOutlined style={{ fontSize: 14 }} />}
          />
        )}
        {destroy && (
          <Button
            onClick={confirmDestroy}
            title="Delete"
            size="small"
            type="text"
            icon={<DeleteOutlined style={{ fontSize: 14 }} />}
          />
        )}
        {approve && (
          <Button
            onClick={confirmApprove}
            size="small"
            title="Approve"
            type="text"
            icon={<CheckOutlined style={{ fontSize: 14 }} />}
          />
        )}
      </Space>
    </>
  );
}

export default TableActionButton;
