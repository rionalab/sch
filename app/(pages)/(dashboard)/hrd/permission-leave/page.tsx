import React from "react";
import { index } from "./action";
import Table from "./components/table/table";
import { normalizeTableRow } from "@/helpers";
import { GuardPage } from "@/c";

async function Page() {
  const data = await index();

  return (
    <GuardPage access="menu_permission_leave">
      <Table rows={normalizeTableRow<any>(data)} />;
    </GuardPage>
  );
}

export default Page;
