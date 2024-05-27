import {
  CheckOutlined,
  DeleteOutlined,
  DownOutlined,
  EditOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown, Space, message } from "antd";
import { TableActionsCmp } from "../type";

function TableActionDropdown<T>(props: TableActionsCmp<T>) {
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

  const x: any[] = [];

  const flag = typeof others[0];

  // @ts-expect-error asd
  const items: MenuProps["items"] = [
    ...(flag
      ? others.map((rowAct) => {
          if (rowAct && typeof rowAct === "object" && "onClick" in rowAct) {
            return {
              ...rowAct,
              onClick: () => {
                rowAct?.onClick?.(row);
              },
            };
          }
        })
      : []),
    edit
      ? {
          label: "Edit",
          onClick: () => alert(1),
          key: "Edit",
          icon: <EditOutlined />,
        }
      : null,
    destroy
      ? {
          label: "Delete",
          key: "delete",
          icon: <DeleteOutlined />,
          onClick: () => alert(1),
          danger: true,
        }
      : null,
    approve
      ? {
          label: "Approve",
          key: "Approve",
          onClick: () => alert(1),
          icon: <CheckOutlined />,
        }
      : null,
  ].filter(Boolean);

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };

  const menuProps = {
    items,
    // onClick: handleMenuClick,
  };

  return (
    <>
      <Dropdown menu={menuProps}>
        <Button size="small">
          <Space>
            Actions
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
    </>
  );
}

export default TableActionDropdown;
