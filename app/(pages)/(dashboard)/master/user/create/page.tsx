import React, { Suspense } from "react";
import Form from "../components/form/form";
import { GuardPage, LoadingModule } from "@/c";
import * as role from "@/pages/(dashboard)/superadmin/role/action";

async function Page() {
  const roles = await role.index();

  return (
    <Suspense fallback={<LoadingModule />}>
      <GuardPage access="menu_create_user">
        <Form roles={roles} />
      </GuardPage>
    </Suspense>
  );
}

export default Page;
