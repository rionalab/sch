import React, { Suspense } from "react";
import Form from "../../components/form/form";
import { GuardPage, LoadingModule } from "@/c";

function Page() {
  return (
    <Suspense fallback={<LoadingModule />}>
      <GuardPage access="role_admin_role_edit">
        <Form />
      </GuardPage>
    </Suspense>
  );
}

export default Page;
