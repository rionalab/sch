"use client";

import { Inter } from "next/font/google";
import { Layout, Button, theme } from "antd";
import styles from "./page.module.scss";
import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import "./globals.css";
import { Sidebar } from "./_components";
import StoreProvider from "@/libs/zustand/StoreProvider";
import GlobalProvider from "./_components/layout/GlobalProvider";

const inter = Inter({ subsets: ["latin"] });
const { Header, Sider, Content } = Layout;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <StoreProvider>
            <GlobalProvider>
              <Layout className={styles.layout}>
                <Sidebar />
                <Layout>
                  <Header style={{ padding: 0, background: colorBgContainer }}>
                    <Button
                      type="text"
                      icon={
                        collapsed ? (
                          <MenuUnfoldOutlined />
                        ) : (
                          <MenuFoldOutlined />
                        )
                      }
                      onClick={() => setCollapsed(!collapsed)}
                      style={{
                        fontSize: "16px",
                        width: 64,
                        height: 64,
                      }}
                    />
                  </Header>
                  <Content
                    style={{
                      margin: "24px 16px",
                      padding: 24,
                      minHeight: 280,
                      background: colorBgContainer,
                      borderRadius: borderRadiusLG,
                    }}
                  >
                    {children}
                  </Content>
                </Layout>
              </Layout>
            </GlobalProvider>
          </StoreProvider>
        </main>
      </body>
    </html>
  );
}
