import { PageHeader } from "@/c";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageHeader id="master_position" />
      {children}
    </>
  );
}

export default Layout;
