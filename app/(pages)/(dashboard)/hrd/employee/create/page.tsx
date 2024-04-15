import { GuardPage } from "@/c";
import { index } from "@/pages/(dashboard)/master/position/action";
import Form from "../components/form/form";

async function Page() {
  const positions = await index();

  const props = {
    positions,
  };

  return (
    <GuardPage access="role_hr_employee_create">
      <Form {...props} />
    </GuardPage>
  );
}

export default Page;
