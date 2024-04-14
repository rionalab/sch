import { GuardPage, LoadingModule } from "@/c";
import { Suspense } from "react";
import Form from "../../components/form/form";

async function Page() {
  return (
    <GuardPage access="role_staff_purchase_edit">
      <Suspense fallback={<LoadingModule />}>
        <Form />
      </Suspense>
    </GuardPage>
  );
}

export default Page;
