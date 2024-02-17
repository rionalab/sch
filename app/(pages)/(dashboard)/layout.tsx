import React from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { ClientAuthProvider } from "@/contexts";
import { Layout } from "antd";

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
      {/* <ClientAuthProvider> */}
      <Layout>
        <h1>1111111111111</h1>
        {JSON.stringify(session)}
        {children}
      </Layout>
      {/* </ClientAuthProvider> */}
    </>
  );
}
