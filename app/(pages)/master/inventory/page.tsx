import React from "react";
import { index } from "./action";
import Table from "./components/table/table";
import { normalizeTableRow } from "@/helpers";

async function Page() {
  const data = await index();
  console.log(11, data);
  return <Table rows={normalizeTableRow<any>(data)} />;
}

export default Page;
