import React from "react";
import FormEmployee from "../components/form";
import { getPosition } from "@/pages/master/position/action";

async function Page() {
  const positions = await getPosition();

  const props = {
    positions,
  };

  return (
    <>
      <FormEmployee {...props} />
    </>
  );
}

export default Page;
