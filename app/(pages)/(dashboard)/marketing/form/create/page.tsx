import { GuardPage } from "@/c";
import { MenuAccess } from "@/types";
import Form from "../components/form/form";
import { role } from "../configs";

function Page() {
  return (
    <GuardPage access={`role_${role}_create` as MenuAccess}>
      <Form />
    </GuardPage>
  );
}

export default Page;
