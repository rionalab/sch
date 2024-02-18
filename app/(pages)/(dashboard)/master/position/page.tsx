import React from "react";
import { index } from "./action";
import Table from "./components/table/table";
import { normalizeTableRow } from "@/helpers";
import { type Prisma } from "@prisma/client";

async function Page() {
  const data = await index();

  return <Table rows={normalizeTableRow<Prisma.PositionCreateInput>(data)} />;
}

export default Page;
