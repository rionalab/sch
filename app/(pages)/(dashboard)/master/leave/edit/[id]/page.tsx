import React, { Suspense } from "react";
import FormVendor from "../../components/form/form";
import { LoadingModule } from "@/c";

function Page() {
  return (
    <div>
      <Suspense fallback={<LoadingModule />}>
        <FormVendor />
      </Suspense>
    </div>
  );
}

export default Page;
