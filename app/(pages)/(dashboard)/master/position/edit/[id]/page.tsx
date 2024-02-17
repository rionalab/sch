import React, { Suspense } from "react";
import FormPosition from "@/pages/master/position/components/form/form";

interface Props {
  params: {
    id: string;
  };
}

function Page({ params }: Props) {
  return (
    <div>
      <Suspense fallback={"loading form............... "}>
        <FormPosition />
      </Suspense>
    </div>
  );
}

export default Page;
