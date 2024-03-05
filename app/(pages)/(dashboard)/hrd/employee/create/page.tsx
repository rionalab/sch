import React from "react";
import FormEmployee from "../components/form/form";
import { index } from "@/pages/(dashboard)/master/position/action";
import { GuardPage } from "@/c";

async function Page() {
  const positions = await index();

  const props = {
    positions,
  };

  return (
    <GuardPage access="menu_create_employee">
      <FormEmployee {...props} />
    </GuardPage>
  );
}

export default Page;
