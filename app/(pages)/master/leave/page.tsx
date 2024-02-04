import React from "react";
import { index } from "./action";
import Table from "./components/table/table";
import { normalizeTableRow } from "@/helpers";

async function Page() {
  const data = await index();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return <Table rows={normalizeTableRow<any>(data)} />;
}

export default Page;
