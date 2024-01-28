import React from "react";
import { getPosition } from "./action";
import Table from "./components/table";
import { tableData } from "@/helpers";
import { Prisma } from "@prisma/client";

async function Page() {
  const data = await getPosition();

  return <Table rows={tableData<Prisma.PositionCreateInput>(data)} />;
}

export default Page;
