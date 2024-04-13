import { PageHeader } from "@/c";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageHeader id="master_work_unit" />
      {children}
    </>
  );
}

export default Layout;
