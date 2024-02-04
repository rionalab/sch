import React, { Suspense } from "react";
import FormEmployee from "../../components/form/form";
import { getPosition } from "@/pages/master/position/action";
import { ContentLoader } from "@/c";

interface Props {
  params: {
    id: string;
  };
}

async function Page({ params }: Props) {
  const positions = await getPosition();

  const props = {
    positions,
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
