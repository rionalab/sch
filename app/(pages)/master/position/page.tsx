import React from "react";
import { getPosition } from "./action";
import Table from "./components/table";
import { normalizeTableRow } from "@/helpers";
import { type Prisma } from "@prisma/client";

async function Page() {
  const data = await getPosition();

  return <Table rows={normalizeTableRow<Prisma.PositionCreateInput>(data)} />;
}

export default Page;
