import { PageHeader } from "@/c";
import React from "react";

export const revalidate = 0;

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageHeader id="employee" />
      {children}
    </>
  );
}

export default Layout;
