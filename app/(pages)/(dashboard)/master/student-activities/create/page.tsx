import { GuardPage } from "@/c";
import Form from "../components/form/form";

function Page() {
  return (
    <GuardPage access="role_master_student_act_create">
      <Form />
    </GuardPage>
  );
}

export default Page;
