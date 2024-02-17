import React from "react";
import { getVendor } from "./action";
import Table from "./components/table/table";
import { normalizeTableRow } from "@/helpers";

async function Page() {
  const data = await getVendor();

  return <Table rows={normalizeTableRow<any>(data)} />;
}

export default Page;
