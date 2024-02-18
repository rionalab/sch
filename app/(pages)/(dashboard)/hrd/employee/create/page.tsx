import React from "react";
import FormEmployee from "../components/form/form";
import { index } from "@/pages/(dashboard)/master/position/action";

async function Page() {
  const positions = await index();

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
