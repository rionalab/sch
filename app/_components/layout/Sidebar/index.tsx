import React, { useState } from "react";
import { Layout, Menu, Button, theme } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  FileProtectOutlined,
  BarcodeOutlined,
  BulbOutlined,
  FileSearchOutlined,
  SolutionOutlined,
  AuditOutlined,
  BookOutlined,
  DollarOutlined,
  FileDoneOutlined,
  FileAddOutlined,
  HomeOutlined,
  EditOutlined,
  FileTextOutlined,
  WalletOutlined,
  ClockCircleOutlined,
  NotificationOutlined,
  UploadOutlined,
  SkinOutlined,
  DownloadOutlined,
  TeamOutlined,
  ProfileOutlined,
  UserOutlined,
  GlobalOutlined,
  ContainerOutlined,
  VideoCameraOutlined,
  ShoppingCartOutlined,
  BankOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.scss";
import { urls } from "@/consts/urls";

const { Sider } = Layout;

function Sidebar() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Sider className={styles.sidebar}>
      <Image
        className={styles.logo}
        width={55}
        height={55}
        alt="logo"
        src={"/images/logo.jpg"}
      />

      <Menu
        mode="inline"
        defaultSelectedKeys={["0"]}
        items={[
          {
            key: "00",
            icon: <HomeOutlined />,
            label: <Link href="/fruits">Fruits</Link>,
          },
          {
            key: "0",
            icon: <HomeOutlined />,
            label: <Link href="/">Home</Link>,
          },
          {
            key: "1",
            icon: <SolutionOutlined />,
            label: "Human Resource",
            children: [
              {
                key: "1.1",
                icon: <UserOutlined />,
                label: <Link href={urls.hrd.employee.index}>Employee</Link>,
              },
              {
                key: "1.2",
                icon: <ClockCircleOutlined />,
                label: <Link href="/hrd/attendance">Attendance</Link>,
              },
              {
                key: "1.3",
                icon: <WalletOutlined />,
                label: <Link href="/hrd/employee">Payroll</Link>,
              },
              {
                key: "1.4",
                icon: <FileProtectOutlined />,
                label: <Link href="/hrd/employee">Permission Letter</Link>,
              },
              {
                key: "1.5",
                icon: <BulbOutlined />,
                label: <Link href="/hrd/employee">Psychotest</Link>,
              },
              {
                key: "1.6",
                icon: <GlobalOutlined />,
                label: <Link href="/hrd/employee">British Council</Link>,
              },
            ],
          },
          {
            key: "2",
            icon: <FileDoneOutlined />,
            label: "General Affair ",
            children: [
              {
                key: "2.1",
                icon: <UserOutlined />,
                label: <Link href="/general-affair/assets">Assets</Link>,
              },
              {
                key: "2.2",
                icon: <BarcodeOutlined />,
                label: (
                  <Link href="/general-affair/assets-barcode">
                    Assets Barcode
                  </Link>
                ),
              },
              {
                key: "2.3",
                icon: <AuditOutlined />,
                label: (
                  <Link href="/hrd/employee">Ticketing Hardware & Venue</Link>
                ),
              },
              {
                key: "2.4",
                icon: <ContainerOutlined />,
                label: <Link href="/hrd/employee">Purchase Request</Link>,
              },
              {
                key: "2.5",
                icon: <FileSearchOutlined />,
                label: <Link href="/hrd/employee">Purchase Order</Link>,
              },
              {
                key: "2.6",
                icon: <FileProtectOutlined />,
                label: <Link href="/hrd/employee">Purchase Approve </Link>,
              },
            ],
          },
          {
            key: "3",
            icon: <DollarOutlined />,
            label: "Finance ",
            children: [
              {
                key: "3.1",
                icon: <FileTextOutlined />,
                label: <Link href="/general-affair/assets">Invoice</Link>,
              },
              {
                key: "3.2",
                icon: <TeamOutlined />,
                label: (
                  <Link href="/general-affair/assets-barcode">
                    Parent Request Form
                  </Link>
                ),
              },
              {
                key: "3.3",
                icon: <ProfileOutlined />,
                label: <Link href="/hrd/employee">Employee Salary Slip</Link>,
              },
              {
                key: "3.4",
                icon: <BookOutlined />,
                label: <Link href="/hrd/employee">Book Fee Payment</Link>,
              },
              {
                key: "3.5",
                icon: <DownloadOutlined />,
                label: <Link href="/hrd/employee">Incoming Payment</Link>,
              },
              {
                key: "3.6",
                icon: <SkinOutlined />,
                label: <Link href="/hrd/employee">Uniform Payment </Link>,
              },
              {
                key: "3.7",
                icon: <BankOutlined />,
                label: <Link href="/hrd/employee">School Fee Payment </Link>,
              },
            ],
          },
          {
            key: "4",
            icon: <NotificationOutlined />,
            label: <Link href="/todos">Marketing</Link>,
            children: [
              {
                key: "4.1",
                icon: <FileAddOutlined />,
                label: <Link href="/hrd/employee">Admission Process</Link>,
              },
              {
                key: "4.2",
                icon: <EditOutlined />,
                label: <Link href="/hrd/employee">Ticketing Design</Link>,
              },
            ],
          },
        ]}
      />
    </Sider>
  );
}

export default Sidebar;
