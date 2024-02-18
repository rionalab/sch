import React from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { ClientAuthProvider, DashboardProvider } from "@/contexts";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/signin");
  }

  return (
    <>
      <ClientAuthProvider>
        <DashboardProvider>{children}</DashboardProvider>
      </ClientAuthProvider>
    </>
  );
}
