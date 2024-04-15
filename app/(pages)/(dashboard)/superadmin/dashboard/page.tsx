import React from "react";
import DashboardSummaries from "@/app/_components/dashboard-summaries";
import { Slider } from "@/c";
import styles from "./styles.module.scss";
import Cols from "./components/cols";

function Page() {
  return (
    <div className={styles.container}>
      <DashboardSummaries />
      <Slider />
      <Cols />
    </div>
  );
}

export default Page;
