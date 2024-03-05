import React from "react";
import { index } from "./action";
import Table from "./components/table/table";
import { normalizeTableRow } from "@/helpers";
import { type Prisma } from "@prisma/client";
import { GuardPage } from "@/c";

async function Page() {
  const data = await index();

  return (
    <GuardPage access="menu_position">
      <Table rows={normalizeTableRow<Prisma.PositionCreateInput>(data)} />;
    </GuardPage>
  );
}

export default Page;
