import { PageHeader } from "@/c";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageHeader id="staff_leave_request" />
      {children}
    </>
  );
}

export default Layout;
