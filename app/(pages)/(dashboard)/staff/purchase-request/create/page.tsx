import { GuardPage } from "@/c";
import Form from "../components/form/form";

async function Page() {
  return (
    <GuardPage access="role_staff_purchase_create">
      <Form />
    </GuardPage>
  );
}

export default Page;
