import { GuardPage, LoadingModule } from "@/c";
import * as role from "@/pages/(dashboard)/superadmin/role/action";
import { Suspense } from "react";
import Form from "../../components/form/form";

async function Page() {
  const roles = await role.index();
  return (
    <GuardPage access="role_master_user_edit">
      <Suspense fallback={<LoadingModule />}>
        <Form roles={roles} />
      </Suspense>
    </GuardPage>
  );
}

export default Page;
