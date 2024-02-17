"use client";

import React from "react";
import { Layout } from "antd";
import { Sidebar, Header, Content } from "@/c";
import styles from "./styles.module.scss";

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Layout>
        <Sidebar />
        <Layout>
          <Header />
          <Content className={styles.content}>{children}</Content>
        </Layout>
      </Layout>
    </>
  );
}
