import React from "react";
import { getVendor } from "./action";
import Table from "./components/table/table";
import { GuardPage } from "@/c";
import { normalizeTableRow } from "@/helpers";

async function Page() {
  const data = await getVendor();

  return (
    <GuardPage access="menu_vendor">
      <Table rows={normalizeTableRow<any>(data)} />
    </GuardPage>
  );
}

export default Page;
