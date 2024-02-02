import React from "react";
import { getEmployee } from "./action";
import Table from "./components/table/table";
import { normalizeTableRow } from "@/libs/helpers/table";

async function Page() {
  const data = await getEmployee();

  return <Table rows={normalizeTableRow<any>(data)} />;
}

export default Page;
