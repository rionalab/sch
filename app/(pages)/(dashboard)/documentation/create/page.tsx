import { GuardPage } from "@/c";
import Form from "../components/form/form";

function Page() {
  return (
    <GuardPage access="role_admin_role_create">
      <Form />
    </GuardPage>
  );
}

export default Page;
