import React, { Suspense } from "react";
import Form from "../../components/form/form";
import { GuardPage, LoadingModule } from "@/c";

function Page() {
  return (
    <GuardPage access="menu_edit_user">
      <Suspense fallback={<LoadingModule />}>
        <Form />
      </Suspense>
    </GuardPage>
  );
}

export default Page;
