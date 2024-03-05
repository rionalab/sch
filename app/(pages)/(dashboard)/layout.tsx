import React from "react";
import { ClientAuthProvider, DashboardProvider } from "@/contexts";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ClientAuthProvider>
        <DashboardProvider>{children}</DashboardProvider>
      </ClientAuthProvider>
    </>
  );
}
