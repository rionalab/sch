import React from "react";
import { index } from "./action";
import Table from "./components/table/table";
import { normalizeTableRow } from "@/helpers";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

async function Page() {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/master/work-unit");
  }

  const data = await index();

  return (
    <>
      {JSON.stringify(session.user)}
      <Table rows={normalizeTableRow<any>(data)} />;
    </>
  );
}

export default Page;
