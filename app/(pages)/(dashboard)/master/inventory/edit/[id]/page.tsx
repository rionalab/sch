import React, { Suspense } from "react";
import FormVendor from "../../components/form/form";
import { GuardPage, LoadingModule } from "@/c";

interface Props {
  params: {
    id: string;
  };
}

function Page({ params }: Props) {
  return (
    <Suspense fallback={<LoadingModule />}>
      <GuardPage access="menu_edit_inventory">
        <FormVendor />
      </GuardPage>
    </Suspense>
  );
}

export default Page;
