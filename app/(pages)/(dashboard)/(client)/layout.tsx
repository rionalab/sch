"use client";

import React from "react";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

function Layout({ children }: { children: React.ReactNode }) {
  // useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     redirect("/api/auth/signin");
  //   },
  // });

  return <>{children}</>;
}

export default Layout;
