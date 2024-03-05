"use client";

import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  FolderOutlined,
  FileOutlined,
  DeploymentUnitOutlined,
  AppstoreAddOutlined,
  HomeOutlined,
  SolutionOutlined,
  // FileProtectOutlined,
  // BarcodeOutlined,
  // BulbOutlined,
  // FileSearchOutlined,
  // AuditOutlined,
  // BookOutlined,
  // DollarOutlined,
  // FileDoneOutlined,
  // FileAddOutlined,
  // EditOutlined,
  // FileTextOutlined,
  // WalletOutlined,
  // ClockCircleOutlined,
  // NotificationOutlined,
  // SkinOutlined,
  // DownloadOutlined,
  // TeamOutlined,
  // ProfileOutlined,
  // GlobalOutlined,
  // ContainerOutlined,
  // BankOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.scss";
import { urls } from "@/consts";
import type { ItemType, MenuItemType } from "antd/es/menu/hooks/useItems";

const { Sider } = Layout;

export function Sidebar() {
  const menus = [
    {
      key: "menu_master",
      icon: <AppstoreAddOutlined />,
      label: "Master Data",
      children: [
        {
          key: "menu_vendor",
          icon: <DeploymentUnitOutlined />,
          label: <Link href={urls.master.vendor.index}>Supplier</Link>,
        },
        {
          key: "menu_department",
          icon: <DeploymentUnitOutlined />,
          label: <Link href={urls.master.department.index}>Department</Link>,
        },
        {
          key: "UoM",
          icon: <DeploymentUnitOutlined />,
          label: <Link href={urls.master.uom.index}>UoM</Link>,
        },
        {
          key: "inventory",
          icon: <DeploymentUnitOutlined />,
          label: <Link href={urls.master.inventory.index}>Inventory</Link>,
        },

        {
          key: "masterPosition",
          icon: <DeploymentUnitOutlined />,
          label: <Link href={urls.master.position.index}>Position</Link>,
        },
        {
          key: "studentAct",
          icon: <DeploymentUnitOutlined />,
          label: (
            <Link href={urls.master.studentActivities.index}>
              Student Activities
            </Link>
          ),
        },
        {
          key: "workUnit",
          icon: <DeploymentUnitOutlined />,
          label: <Link href={urls.master.workUnit.index}>Work Unit</Link>,
        },
        {
          key: "leaveType",
          icon: <DeploymentUnitOutlined />,
          label: <Link href={urls.master.leave.index}>Leave Type</Link>,
        },
        {
          key: "user",
          icon: <DeploymentUnitOutlined />,
          label: <Link href={urls.master.user.index}>User</Link>,
        },
      ],
    },
    {
      key: "menu_hr",
      icon: <SolutionOutlined />,
      label: "Human Resource",
      children: [
        {
          key: "1.1",
          icon: <UserOutlined />,
          label: <Link href={urls.hrd.employee.index}>Employee</Link>,
        },
        // {
        //   key: "permissionLeave",
        //   icon: <UserOutlined />,
        //   label: (
        //     <Link href={urls.hrd.employee.index}>Permission Leave</Link>
        //   ),
        // },
        // {
        //   key: "1.2",
        //   icon: <ClockCircleOutlined />,
        //   label: <Link href="/hrd/attendance">Attendance</Link>,
        // },
        // {
        //   key: "1.3",
        //   icon: <WalletOutlined />,
        //   label: <Link href="/hrd/employee">Payroll</Link>,
        // },
        // {
        //   key: "1.4",
        //   icon: <FileProtectOutlined />,
        //   label: <Link href="/hrd/employee">Permission Letter</Link>,
        // },
        // {
        //   key: "1.5",
        //   icon: <BulbOutlined />,
        //   label: <Link href="/hrd/employee">Psychotest</Link>,
        // },
        // {
        //   key: "1.6",
        //   icon: <GlobalOutlined />,
        //   label: <Link href="/hrd/employee">British Council</Link>,
        // },
      ],
    },
    {
      key: "menu_staff",
      icon: <FolderOutlined />,
      label: "Staff",
      children: [
        {
          key: "staffLeaveRequest",
          icon: <FileOutlined />,
          label: (
            <Link href={urls.staff.leaveRequest.index}>Leave Request</Link>
          ),
        },
      ],
    },
    {
      key: "menu_superadmin",
      icon: <FolderOutlined />,
      label: "Super Admin",
      children: [
        {
          key: "menu_role",
          icon: <FileOutlined />,
          label: <Link href={urls.superadmin.role.index}>Role</Link>,
        },
      ],
    },
    {
      key: "menu_account",
      icon: <FolderOutlined />,
      label: "Account",
      children: [
        {
          key: "updatePassword",
          icon: <FileOutlined />,
          label: (
            <Link href={urls.account.updatePassword.index}>
              Update Password
            </Link>
          ),
        },
      ],
    },
  ];

  const [finalMenus, setFinalMenus] = useState<any[]>([]);

  const checkChildren = (
    arrChildren: any[] | undefined,
    roleActions: string
  ) => {
    if (!arrChildren) {
      return null;
    }

    return arrChildren
      .map((menu) => {
        const { key } = menu;

        if (roleActions?.includes(String(key))) {
          return menu;
        }

        return false;
      })
      .filter(Boolean);
  };

  const menusBasedOnRole = () => {
    const roleActions = localStorage.getItem("roleActions");

    const filtered = menus.map((menu) => {
      const { key } = menu;

      if (roleActions?.includes(key)) {
        return { ...menu, children: checkChildren(menu.children, roleActions) };
      }

      return false;
    });

    setFinalMenus([
      {
        key: "menu_dashboard",
        icon: <HomeOutlined />,
        label: <Link href="/">Dashboard</Link>,
      },
      ...filtered.filter(Boolean),
    ]);
  };

  useEffect(() => {
    setTimeout(() => {
      menusBasedOnRole();
    }, 100);
  }, []);

  return (
    <Sider className={styles.sidebar}>
      <Image
        className={styles.logo}
        width={306}
        height={245}
        alt="logo"
        src={"/images/logo.png"}
      />

      <Menu mode="inline" defaultSelectedKeys={["0"]} items={finalMenus} />
    </Sider>
  );
}
