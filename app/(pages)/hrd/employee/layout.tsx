import React from "react";
import { PageHeader } from "@/c";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageHeader id="employee" />
      {children}
    </>
  );
}

export default Layout;
