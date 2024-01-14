import React from "react";
import { Layout, Flex, theme } from "antd";
import styles from "./styles.module.scss";

function Header() {
  const { Header: HeaderAntd, Content } = Layout;

  return (
    <HeaderAntd className={styles.header}>
      <Flex style={{ width: "100%" }} justify="space-between" align="center">
        <div></div>
        <div>
          <span className="abc">aaa</span>
        </div>
      </Flex>
    </HeaderAntd>
  );
}

export default Header;
