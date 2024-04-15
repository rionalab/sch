import { GuardPage, LoadingModule } from "@/c";
import { Suspense } from "react";
import FormVendor from "../../components/form/form";

interface Props {
  params: {
    id: string;
  };
}

function Page({ params }: Props) {
  return (
    <GuardPage access="role_master_supplier_edit">
      <Suspense fallback={<LoadingModule />}>
        <FormVendor />
      </Suspense>
    </GuardPage>
  );
}

export default Page;
