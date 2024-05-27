import { GuardPage } from "@/c";
import { normalizeTableRow } from "@/libs/helpers/table";
import { index } from "./action";
import Table from "./components/table/table";

async function Page() {
  let data = await index();

  data = data.map((row) => {
    return { ...row, data: JSON.parse(row.data) };
  });

  return (
    <GuardPage access="role_ao_admission_view">
      <Table rows={normalizeTableRow<any>(data)} />
    </GuardPage>
  );
}

export default Page;
