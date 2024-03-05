import React, { Suspense } from "react";
import FormPosition from "@/pages/(dashboard)/master/position/components/form/form";
import { GuardPage } from "@/c";

interface Props {
  params: {
    id: string;
  };
}

function Page({ params }: Props) {
  return (
    <GuardPage access="menu_edit_position">
      <Suspense fallback={"loading form............... "}>
        <FormPosition />
      </Suspense>
    </GuardPage>
  );
}

export default Page;
