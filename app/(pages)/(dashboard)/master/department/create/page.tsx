import React from "react";
import Form from "../components/form/form";
import { GuardPage } from "@/c";

function Page() {
  return (
    <GuardPage access="role_master_department_create">
      <Form />
    </GuardPage>
  );
}

export default Page;
