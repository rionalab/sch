import { PageHeader } from "@/c";
import { type ModuleName } from "@/types";
import React from "react";
import { role } from "./configs";

export const dynamic = "force-dynamic";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageHeader id={role as ModuleName} />
      {children}
    </>
  );
}

export default Layout;
