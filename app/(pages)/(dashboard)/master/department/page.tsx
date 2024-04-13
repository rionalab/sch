import React from "react";
import { index } from "./action";
import Table from "./components/table/table";
import { normalizeTableRow } from "@/helpers";
import { GuardPage } from "@/c";

async function Page() {
  const data = await index();

  return (
    <GuardPage access="role_master_department_view">
      <Table rows={normalizeTableRow<any>(data)} />
    </GuardPage>
  );
}

export default Page;
