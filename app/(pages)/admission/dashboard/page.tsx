"use client";

import DashboardSummaries from "@/app/_components/dashboard-summaries";
import { LoadingModule, Slider } from "@/c";
import Cols from "./components/cols";
import { useEffect, useState } from "react";
import { checkHasRegisterParent } from "../action";
import useParentData, { parentHasRegister } from "../helper";
import { redirect } from "next/navigation";
import { urls } from "@/consts";

function Page() {
  const [loading, setLoading] = useState(true);

  const init = async () => {
    const parentRegister = await parentHasRegister();
    console.log("Parent Register:", parentRegister);

    if (!parentRegister) {
      redirect(urls.admission.parentData);
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    init();
  }, []);

  if (loading) {
    return <LoadingModule />;
  }
  return (
    <div>
      <DashboardSummaries />
      <Slider />
      <Cols />
    </div>
  );
}

export default Page;
