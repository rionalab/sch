import React from "react";
import FormEditCreate from "../components/form/form";
import { GuardPage } from "@/c";

function Page() {
  return (
    <GuardPage access="menu_create_position">
      <FormEditCreate />
    </GuardPage>
  );
}

export default Page;
