import { PageHeader } from "@/c";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { urls } from "@/consts/urls";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageHeader id="employee" />
      {children}
    </>
  );
}

export default Layout;
