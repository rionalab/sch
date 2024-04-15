import React from "react";
import Form from "./components/form/form";
import { GuardPage } from "@/c";

async function Page() {
  return (
    <GuardPage access="role_account_password_view">
      <Form />
    </GuardPage>
  );
}

export default Page;
