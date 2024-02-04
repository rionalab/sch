import React from "react";
import { Layout, Flex, Avatar } from "antd";
import styles from "./styles.module.scss";
import { UserOutlined } from "@ant-design/icons";

export function Header() {
  const { Header: HeaderAntd, Content } = Layout;

  return (
    <HeaderAntd className={styles.header}>
      <Flex style={{ width: "100%" }} justify="space-between" align="center">
        <div className={styles.welcome}>
          Welcome, <span>Orlando</span>
        </div>
        <div className={styles.headerRight}>
          <Avatar
            style={{
              backgroundColor: "rgb(230, 244, 255)",
              color: " rgb(22, 119, 255)",
              cursor: "pointer",
            }}
            icon={<UserOutlined color="black" />}
          />
        </div>
      </Flex>
    </HeaderAntd>
  );
}
