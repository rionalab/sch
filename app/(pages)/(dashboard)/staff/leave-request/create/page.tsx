import { GuardPage } from "@/c";
import Form from "../components/form/form";

function Page() {
  return (
    <GuardPage access="role_staff_leave_request_create">
      <Form />
    </GuardPage>
  );
}

export default Page;
