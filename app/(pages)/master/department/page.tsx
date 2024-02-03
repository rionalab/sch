import React from "react";
import { getDepartment } from "./action";
import Table from "./components/table/table";
import { normalizeTableRow } from "@/helpers";

async function Page() {
  const data = await getDepartment();

  return <Table rows={normalizeTableRow<any>(data)} />;
}

export default Page;
