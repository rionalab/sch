import React, { Suspense } from "react";
import FormVendor from "../components/form/form";
import { LoadingModule } from "@/c";

function Page() {
  return (
    <Suspense fallback={<LoadingModule />}>
      <FormVendor />
    </Suspense>
  );
}

export default Page;
