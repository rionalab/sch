import React from "react";
import { Layout, Flex, Dropdown, Avatar } from "antd";
import styles from "./styles.module.scss";
import {
  UserOutlined,
  CommentOutlined,
  PoweroffOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { useSession, signOut } from "next-auth/react";
import type { MenuProps } from "antd";
import { urls } from "@/consts";

const items: MenuProps["items"] = [
  {
    label: <a href="https://www.google.com">Help / Feedback</a>,
    key: "0",
    icon: <CommentOutlined />,
  },
  {
    label: <a href="https://www.google.com">Documentation</a>,
    icon: <InfoCircleOutlined />,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "Logout",
    key: "3",
    icon: <PoweroffOutlined />,
    onClick: () => {
      void signOut({
        redirect: true,
        callbackUrl: urls.auth.signin,
      });
    },
  },
];

export function Header() {
  const { Header: HeaderAntd } = Layout;
  const { data: session } = useSession();

  return (
    <HeaderAntd className={styles.header}>
      <Flex style={{ width: "100%" }} justify="space-between" align="center">
        <div className={styles.welcome}>
          Welcome, <span>{session?.user?.name}</span>
        </div>
        <div className={styles.headerRight}>
          <Dropdown menu={{ items }} trigger={["click"]}>
            <Avatar
              style={{
                backgroundColor: "rgb(230, 244, 255)",
                color: " rgb(22, 119, 255)",
                cursor: "pointer",
              }}
              icon={
                <UserOutlined
                  style={{ fontSize: 22 }}
                  size={44}
                  color="black"
                />
              }
            />
          </Dropdown>
        </div>
      </Flex>
    </HeaderAntd>
  );
}
