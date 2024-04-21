import { PageHeader } from "@/c";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageHeader id="hr_student_registration" />
      {children}
    </>
  );
}

export default Layout;
