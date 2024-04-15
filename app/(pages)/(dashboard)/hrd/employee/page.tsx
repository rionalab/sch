import { GuardPage } from "@/c";
import { normalizeTableRow } from "@/libs/helpers/table";
import { index } from "./action";
import Table from "./components/table/table";

async function Page() {
  const data = await index();

  return (
    <GuardPage access="role_hr_employee_view">
      <Table rows={normalizeTableRow<any>(data)} />
    </GuardPage>
  );
}

export default Page;
