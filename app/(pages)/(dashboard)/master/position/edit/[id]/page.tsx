import { GuardPage } from "@/c";
import Form from "@/pages/(dashboard)/master/position/components/form/form";
import { Suspense } from "react";

function Page() {
  return (
    <GuardPage access="role_master_position_edit">
      <Suspense fallback={"loading form............... "}>
        <Form />
      </Suspense>
    </GuardPage>
  );
}

export default Page;
