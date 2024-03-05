import React, { Suspense } from "react";
import FormVendor from "../../components/form/form";
import { LoadingModule, GuardPage } from "@/c";

interface Props {
  params: {
    id: string;
  };
}

function Page({ params }: Props) {
  return (
    <Suspense fallback={<LoadingModule />}>
      <GuardPage access="menu_edit_vendor">
        <FormVendor />
      </GuardPage>
    </Suspense>
  );
}

export default Page;
