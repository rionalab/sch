import { GuardPage, LoadingModule } from "@/c";
import { Suspense } from "react";
import FormVendor from "../components/form/form";

function Page() {
  return (
    <Suspense fallback={<LoadingModule />}>
      <GuardPage access="role_master_supplier_create">
        <FormVendor />
      </GuardPage>
    </Suspense>
  );
}

export default Page;
