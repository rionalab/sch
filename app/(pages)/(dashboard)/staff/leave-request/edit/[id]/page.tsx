import { GuardPage, LoadingModule } from "@/c";
import { Suspense } from "react";
import FormVendor from "../../components/form/form";

function Page() {
  return (
    <GuardPage access="role_staff_leave_request_edit">
      <Suspense fallback={<LoadingModule />}>
        <FormVendor />
      </Suspense>
    </GuardPage>
  );
}

export default Page;
