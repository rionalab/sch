import React, { Suspense } from "react";
import FormEmployee from "../../components/form/form";
import * as positions from "@/pages/(dashboard)/master/position/action";
import { GuardPage, ContentLoader } from "@/c";

interface Props {
  params: {
    id: string;
  };
}

async function Page({ params }: Props) {
  const pos = await positions.index();

  const props = {
    positions: pos,
  };

  return (
    <GuardPage access="menu_edit_user">
      <Suspense fallback={<ContentLoader />}>
        <FormEmployee {...props} />
      </Suspense>
    </GuardPage>
  );
}

export default Page;
