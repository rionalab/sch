import { PageHeader } from "@/c";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageHeader id="admin_role" />
      {children}
    </>
  );
}

export default Layout;
