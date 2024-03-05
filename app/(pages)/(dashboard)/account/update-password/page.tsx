import React from "react";
import Form from "./components/form/form";
import { GuardPage } from "@/c";

async function Page() {
  return (
    <GuardPage access="menu_update_password">
      <Form />
    </GuardPage>
  );
}

export default Page;
