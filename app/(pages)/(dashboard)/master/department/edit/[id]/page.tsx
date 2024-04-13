import { GuardPage, LoadingModule } from "@/c";
import { Suspense } from "react";
import Form from "../../components/form/form";

interface Props {
  params: {
    id: string;
  };
}

function Page({ params }: Props) {
  return (
    <GuardPage access="role_master_department_edit">
      <Suspense fallback={<LoadingModule />}>
        <Form />
      </Suspense>
    </GuardPage>
  );
}

export default Page;
