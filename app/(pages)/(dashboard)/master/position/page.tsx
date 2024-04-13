import { GuardPage } from "@/c";
import { normalizeTableRow } from "@/helpers";
import { type Prisma } from "@prisma/client";
import { index } from "./action";
import Table from "./components/table/table";

async function Page() {
  const data = await index();

  return (
    <GuardPage access="role_master_position_view">
      <Table rows={normalizeTableRow<Prisma.PositionCreateInput>(data)} />
    </GuardPage>
  );
}

export default Page;
