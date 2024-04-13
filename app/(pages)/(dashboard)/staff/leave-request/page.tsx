import { GuardPage } from "@/c";
import { normalizeTableRow } from "@/helpers";
import { index } from "./action";
import Table from "./components/table/table";

async function Page() {
  const data = await index();

  return (
    <GuardPage access="role_staff_leave_request_view">
      <Table rows={normalizeTableRow<any>(data)} />
    </GuardPage>
  );
}

export default Page;
