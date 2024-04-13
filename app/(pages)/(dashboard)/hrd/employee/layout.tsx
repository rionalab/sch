import { PageHeader } from "@/c";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageHeader id="hr_employee" />
      {children}
    </>
  );
}

export default Layout;
