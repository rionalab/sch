import { GuardPage } from "@/c";
import { normalizeTableRow } from "@/helpers";
import { index } from "./action";
import Table from "./components/table/table";

async function Page() {
  const data = (await index()).filter((row) => row.code !== "none");

  return (
    <GuardPage access="role_master_department_view">
      <Table rows={normalizeTableRow<any>(data)} />
    </GuardPage>
  );
}

export default Page;
