"use client";

import React, { useEffect, useState } from "react";
import { Layout, Avatar, Skeleton } from "antd";
import {
  UserOutlined,
  FolderOutlined,
  FileOutlined,
  DeploymentUnitOutlined,
  AppstoreAddOutlined,
  HomeOutlined,
  DollarCircleOutlined,
  SolutionOutlined,
  // FileProtectOutlined,
  UsergroupAddOutlined ,
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
import { usePathname, useRouter } from "next/navigation";

const { Sider } = Layout;

const avatarSize = 100;

export function SidebarAdm() {
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
          key: "menu_uom",
          icon: <DeploymentUnitOutlined />,
          label: <Link href={urls.master.uom.index}>UoM</Link>,
        },
        {
          key: "menu_inventory",
          icon: <DeploymentUnitOutlined />,
          label: <Link href={urls.master.inventory.index}>Inventory</Link>,
        },

        {
          key: "menu_position",
          icon: <DeploymentUnitOutlined />,
          label: <Link href={urls.master.position.index}>Position</Link>,
        },
        {
          key: "menu_extracurricular",
          icon: <DeploymentUnitOutlined />,
          label: (
            <Link
              title="Student Activities"
              href={urls.master.studentActivities.index}
            >
              Student Activities
            </Link>
          ),
        },
        {
          key: "menu_workUnit",
          icon: <DeploymentUnitOutlined />,
          label: <Link href={urls.master.workUnit.index}>Work Unit</Link>,
        },
        {
          key: "menu_leaveType",
          icon: <DeploymentUnitOutlined />,
          label: <Link href={urls.master.leave.index}>Leave Type</Link>,
        },
        {
          key: "menu_user",
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
          key: "menu_employee",
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
          key: "menu_leaveRequest",
          icon: <FileOutlined />,
          label: (
            <Link title="Leave Request" href={urls.staff.leaveRequest.index}>
              Leave Request
            </Link>
          ),
        },
        {
          key: "menu_purchaseRequest",
          icon: <FileOutlined />,
          label: (
            <Link
              title="Purchase Order"
              href={urls.staff.purchaseRequest.index}
            >
              Purchase Order
            </Link>
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
          key: "menu_updatePassword",
          icon: <FileOutlined />,
          label: (
            <Link href={urls.account.updatePassword.index}>
              Update Password
            </Link>
          ),
        },
        {
          key: "menu_help",
          icon: <FileOutlined />,
          label: <Link href={urls.help}>Help</Link>,
        },
        {
          key: "menu_documentation",
          icon: <FileOutlined />,
          label: <Link href={urls.documentation}>Documentation</Link>,
        },
        // {
        //   key: "menu_updatePassword",
        //   icon: <FileOutlined />,
        //   label: (
        //     <Link href={urls.account.updatePassword.index}>
        //       Update Password
        //     </Link>
        //   ),
        // },
      ],
    },
  ];

  const [finalMenus, setFinalMenus] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const checkChildren = (
    arrChildren: any[] | undefined,
    roleActions: string,
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
        key: "dashboard",
        icon: <HomeOutlined />,
        href: urls.admission.dashboard,
        label: "Dashboard",
      },
      {
        key: "registration",
        icon: <UsergroupAddOutlined />,
        href: urls.admission.registration,
        label: "Registration",
      },
      {
        key: "payment",
        icon: <DollarCircleOutlined />,
        href: urls.admission.payment,
        label: "Payment",
      },
      ...filtered.filter(Boolean),
    ]);

    setLoading(false);
  };

  useEffect(() => {
    setTimeout(() => {
      menusBasedOnRole();
    }, 1000);
  }, []);

  const pathname = usePathname();

  return (
    <Sider className={styles.sidebar}>
      <Image
        className={styles.logo}
        width={306}
        height={245}
        alt="logo"
        src={"/images/logo.png"}
      />
      <div className={styles.avatarContainer}>
        <Image
          width={100}
          height={100}
          alt={"profile"}
          src={"/images/profile.png"}
        />
      </div>

      <div className={styles.links}>
        {finalMenus.map((menu, i) => {
          return (
            <Link
              className={pathname.includes(menu.key) ? styles.active : ""}
              key={menu.key}
              href={menu.href}
            >
              {menu.icon}
              <span>{menu.label}</span>
            </Link>
          );
        })}
      </div>

      {loading && (
        <div style={{ margin: "0 auto", width: "88%" }}>
          <Skeleton active style={{ marginBottom: "16px" }} />
          <Skeleton active />
        </div>
      )}
    </Sider>
  );
}
