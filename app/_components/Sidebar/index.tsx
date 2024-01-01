"use client";

import React, { useState } from "react";
import { Layout, Menu, Button, theme } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const { Header, Sider, Content } = Layout;

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["0"]}
        items={[
          {
            key: "0",
            icon: <HomeOutlined />,
            label: <Link href="/">Home</Link>,
          },
          {
            key: "1",
            icon: <UserOutlined />,
            label: <Link href="/reports">Reports</Link>,
          },
          {
            key: "2",
            icon: <VideoCameraOutlined />,
            label: <Link href="/settings">Settings</Link>,
          },
          {
            key: "3",
            icon: <UploadOutlined />,
            label: <Link href="/posts">Posts</Link>,
          },
          // {
          //   key: "4",
          //   icon: <UploadOutlined />,
          //   label: <Link href="/todos">Todos</Link>,
          // },
        ]}
      />
    </Sider>
  );
}

export default Sidebar;
