import React from "react";
import Form from "../components/form/form";
import { GuardPage } from "@/c";
import * as vendor from "@/pages/(dashboard)/master/vendor/action";

async function Page() {
  const arrVendor = await vendor.index();
  return (
    <GuardPage access="menu_create_purchaseRequest">
      <Form vendor={arrVendor} />
    </GuardPage>
  );
}

export default Page;
