"use client";

import DashboardSummaries from "@/app/_components/dashboard-summaries";
import { Slider } from "@/c";
import Cols from "./components/cols";

function Page() {
  return (
    <div>
      <DashboardSummaries />
      <Slider />
      <Cols />
    </div>
  );
}

export default Page;
