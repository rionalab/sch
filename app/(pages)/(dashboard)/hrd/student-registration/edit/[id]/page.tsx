import { ContentLoader, GuardPage } from "@/c";
import * as positions from "@/pages/(dashboard)/master/position/action";
import { Suspense } from "react";
import Form from "../../components/form/form";

interface Props {
  params: {
    id: string;
  };
}

async function Page({ params }: Props) {
  const pos = await positions.index();

  const props = {
    positions: pos,
  };

  return (
    <GuardPage access="role_hr_employee_edit">
      <Suspense fallback={<ContentLoader />}>
        <Form {...props} />
      </Suspense>
    </GuardPage>
  );
}

export default Page;
