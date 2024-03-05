import React, { Suspense } from "react";
import FormVendor from "../../components/form/form";
import { GuardPage, LoadingModule } from "@/c";

function Page() {
  return (
    <Suspense fallback={<LoadingModule />}>
      <GuardPage access="menu_edit_work_unit">
        <FormVendor />
      </GuardPage>
    </Suspense>
  );
}

export default Page;
