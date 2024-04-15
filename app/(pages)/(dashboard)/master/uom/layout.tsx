import { PageHeader } from "@/c";
import React from "react";

export const dynamic = "force-dynamic";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageHeader id="master_uom" />
      {children}
    </>
  );
}

export default Layout;
