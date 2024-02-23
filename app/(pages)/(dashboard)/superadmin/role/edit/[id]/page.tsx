import React, { Suspense } from "react";
import Form from "../../components/form/form";
import { LoadingModule } from "@/c";

function Page() {
  return (
    <div>
      <Suspense fallback={<LoadingModule />}>
        <Form />
      </Suspense>
    </div>
  );
}

export default Page;
