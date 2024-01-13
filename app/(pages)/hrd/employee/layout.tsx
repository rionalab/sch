import { PageHeader } from "@/c";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { urls } from "@/consts/urls";

const page = {
  title: "Employee",
  icon: <UserOutlined />,
  breadcrumb: [
    {
      title: "Human Resource",
    },
    {
      title: "Employee",
      icon: <UserOutlined />,
      url: urls.hrd.employee,
    },
  ],
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageHeader {...page} />
      {children}
    </>
  );
}

export default Layout;
