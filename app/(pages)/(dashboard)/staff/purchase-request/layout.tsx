import { PageHeader } from "@/c";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageHeader id="staff_purchase" />
      {children}
    </>
  );
}

export default Layout;
