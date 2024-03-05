import React from "react";
import Form from "../components/form/form";
import { GuardPage } from "@/c";

function Page() {
  return (
    <GuardPage access="menu_create_inventory">
      <Form />
    </GuardPage>
  );
}

export default Page;
