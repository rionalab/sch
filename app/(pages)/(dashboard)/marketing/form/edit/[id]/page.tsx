import { GuardPage, LoadingModule } from "@/c";
import { MenuAccess } from "@/types";
import { Suspense } from "react";
import Form from "../../components/form/form";
import { role } from "../../configs";

function Page() {
  return (
    <Suspense fallback={<LoadingModule />}>
      <GuardPage access={`role_${role}_edit` as MenuAccess}>
        <Form />
      </GuardPage>
    </Suspense>
  );
}

export default Page;
