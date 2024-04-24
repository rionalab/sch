"use client";

import { urls } from "@/consts";
import {
  AppstoreAddOutlined,
  DeploymentUnitOutlined,
  FileOutlined,
  FolderOutlined,
  HomeOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Skeleton } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

const { Sider } = Layout;

export function Sidebar() {
  const menus = [
    {
      key: "role_master",
      icon: <AppstoreAddOutlined />,
      label: "Master Data",
      children: [
        {
          key: "role_master_supplier_view",
          icon: <DeploymentUnitOutlined />,
          label: <Link href={urls.master.vendor.index}>Supplier</Link>,
        },
        {
          key: "role_master_department_view",
          icon: <DeploymentUnitOutlined />,
          label: <Link href={urls.master.department.index}>Department</Link>,
        },
        {
          key: "role_master_uom_view",
          icon: <DeploymentUnitOutlined />,
          label: <Link href={urls.master.uom.index}>UoM</Link>,
        },
        {
          key: "role_master_inventory_view",
          icon: <DeploymentUnitOutlined />,
          label: <Link href={urls.master.inventory.index}>Inventory</Link>,
        },

        {
          key: "role_master_position_view",
          icon: <DeploymentUnitOutlined />,
          label: <Link href={urls.master.position.index}>Position</Link>,
        },
        {
          key: "role_master_student_act_view",
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
          key: "role_master_work_unit_view",
          icon: <DeploymentUnitOutlined />,
          label: <Link href={urls.master.workUnit.index}>Work Unit</Link>,
        },
        {
          key: "role_master_leave_type_view",
          icon: <DeploymentUnitOutlined />,
          label: <Link href={urls.master.leave.index}>Leave Type</Link>,
        },
        {
          key: "role_master_user_view",
          icon: <DeploymentUnitOutlined />,
          label: <Link href={urls.master.user.index}>User</Link>,
        },
      ],
    },
    {
      key: "role_ao",
      icon: <AppstoreAddOutlined />,
      label: "Admission Officer",
      children: [
        {
          key: "role_ao_admission",
          icon: <UserOutlined />,
          label: (
            <Link href={urls.admissionOfficer.admission.index}>Admission</Link>
          ),
        },
      ],
    },
    {
      key: "role_hr",
      icon: <SolutionOutlined />,
      label: "Human Resource",
      children: [
        {
          key: "role_hr_employee",
          icon: <UserOutlined />,
          label: <Link href={urls.hrd.employee.index}>Employee</Link>,
        },

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
      key: "role_marketing",
      icon: <AppstoreAddOutlined />,
      label: "Marketing",
      children: [
        {
          key: "role_marketing_form",
          icon: <UserOutlined />,
          label: <Link href={urls.marketing.form.index}>Form</Link>,
        },
      ],
    },
    {
      key: "role_staff",
      icon: <FolderOutlined />,
      label: "Staff",
      children: [
        {
          key: "role_staff_leave_request_view",
          icon: <FileOutlined />,
          label: (
            <Link title="Leave Request" href={urls.staff.leaveRequest.index}>
              Leave Request
            </Link>
          ),
        },
        {
          key: "role_staff_purchase_view",
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
      key: "role_admin",
      icon: <FolderOutlined />,
      label: "Super Admin",
      children: [
        {
          key: "role_admin_role_view",
          icon: <FileOutlined />,
          label: <Link href={urls.superadmin.role.index}>Role</Link>,
        },
      ],
    },
    {
      key: "role_account",
      icon: <FolderOutlined />,
      label: "Account",
      children: [
        {
          key: "role_account_password_view",
          icon: <FileOutlined />,
          label: (
            <Link href={urls.account.updatePassword.index}>
              Update Password
            </Link>
          ),
        },
        {
          key: "role_account_help_view",
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

      const willShowHr =
        menu.key === "role_hr" &&
        roleActions?.includes("role_hr_employee_view");
      const willShowAo =
        menu.key === "role_ao" &&
        roleActions?.includes("role_ao_admission_view");
      const willShowStaff =
        menu.key === "role_staff" &&
        (roleActions?.includes("role_staff_purchase_view") ??
          roleActions?.includes("role_staff_leave_request_view"));
      const willShowAdmin =
        menu.key === "role_admin" &&
        roleActions?.includes("role_admin_role_view");
      const willShowMaster =
        menu.key === "role_master" &&
        (roleActions?.includes("role_master_supplier_view") ??
          roleActions?.includes("role_master_department_view") ??
          roleActions?.includes("role_master_uom_view") ??
          roleActions?.includes("role_master_inventory_view") ??
          roleActions?.includes("role_master_position_view") ??
          roleActions?.includes("role_master_student_act_view") ??
          roleActions?.includes("role_master_workunit_view") ??
          roleActions?.includes("role_master_leavetype_view") ??
          roleActions?.includes("role_master_user_view"));
      const willShowMarketing =
        menu.key === "role_marketing" &&
        roleActions?.includes("role_marketing_form_view");

      if (
        roleActions?.includes(key) ??
        willShowStaff ??
        willShowAdmin ??
        willShowAo ??
        willShowHr ??
        willShowMaster ??
        willShowMarketing
      ) {
        return {
          ...menu,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          children: checkChildren(menu.children, roleActions!),
        };
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

    setLoading(false);
  };

  useEffect(() => {
    setTimeout(() => {
      menusBasedOnRole();
    }, 1000);
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

      {loading && (
        <div style={{ margin: "0 auto", width: "88%" }}>
          <Skeleton active style={{ marginBottom: "16px" }} />
          <Skeleton active />
        </div>
      )}
    </Sider>
  );
}
