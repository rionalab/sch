import React from "react";
import { index } from "./action";
import { Employee } from "./type";
import Table from "./components/table";
import { tableData } from "@/libs/helpers/table";
import { Prisma } from "@prisma/client";

async function Page() {
  const data = await index();

  console.log(data);

  return <Table rows={tableData<Prisma.PositionCreateInput>(data)} />;
}

export default Page;
