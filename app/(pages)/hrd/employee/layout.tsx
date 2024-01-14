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
      url: urls.hrd.employee.index,
    },
  ],
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageHeader {...page} />
      <hr style={{ border: 0, borderTop: "1px solid #eee" }} />
      <br />
      <br />
      {children}
    </>
  );
}

export default Layout;
