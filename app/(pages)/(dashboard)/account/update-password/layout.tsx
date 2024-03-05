import { PageHeader } from "@/c";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageHeader id="updatePassword" />
      {children}
    </>
  );
}

export default Layout;
