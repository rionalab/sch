import { GuardPage } from "@/c";
import { normalizeTableRow } from "@/helpers";
import { type MenuAccess } from "@/types";
import { index } from "./action";
import Table from "./components/table/table";
import { role } from "./configs";

async function Page() {
  const data = await index();

  return (
    <GuardPage access={`role_${role}_view` as MenuAccess}>
      <Table rows={normalizeTableRow<any>(data)} />
    </GuardPage>
  );
}

export default Page;
