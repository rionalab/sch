import React, { Suspense } from "react";
import FormEmployee from "../../components/form/form";
import * as positions from "@/pages/(dashboard)/master/position/action";
import { ContentLoader } from "@/c";

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
    <div>
      <Suspense fallback={<ContentLoader />}>
        <FormEmployee {...props} />
      </Suspense>
    </div>
  );
}

export default Page;
