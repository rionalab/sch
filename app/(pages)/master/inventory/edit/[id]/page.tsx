import React, { Suspense } from "react";
import FormVendor from "../../components/form/form";
import { LoadingModule } from "@/c";

interface Props {
  params: {
    id: string;
  };
}

function Page({ params }: Props) {
  return (
    <div>
      <Suspense fallback={<LoadingModule />}>
        <FormVendor />
      </Suspense>
    </div>
  );
}

export default Page;
