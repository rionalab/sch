import { GuardPage, LoadingModule } from "@/c";
import { Suspense } from "react";
import Form from "../../components/form/form";

function Page() {
  return (
    <GuardPage access="role_master_work_unit_edit">
      <Suspense fallback={<LoadingModule />}>
        <Form />
      </Suspense>
    </GuardPage>
  );
}

export default Page;
