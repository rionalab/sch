import { GuardPage, LoadingModule } from "@/c";
import { Suspense } from "react";
import Form from "../../components/form/form";

function Page() {
  return (
    <Suspense fallback={<LoadingModule />}>
      <GuardPage access="role_master_uom_edit">
        <Form />
      </GuardPage>
    </Suspense>
  );
}

export default Page;
