import React from "react";
import styles from "./styles.module.scss";
import DashboardSummary from "../dashboard-summary";
import Image from "next/image";

function DashboardSummaries() {
  return (
    <div className={styles.top}>
      <DashboardSummary
        description2="lorem ipsum dolor ismet"
        description="Last Sign In"
        img={
          <Image
            quality={100}
            width={110}
            height={82}
            alt="1"
            src={"/images/sum1.png"}
          />
        }
        title="25 Feb"
      />
      <DashboardSummary
        description2="lorem ipsum dolor ismet"
        description="Days Remaining"
        title="179"
        img={
          <Image
            quality={100}
            width={111}
            height={86}
            alt="1"
            src={"/images/sum2.png"}
          />
        }
      />
      <DashboardSummary
        description2="lorem ipsum dolor ismet"
        description="Due Date"
        title="28 Apr"
        img={
          <Image
            quality={100}
            width={111}
            height={82}
            alt="1"
            src={"/images/sum3.png"}
          />
        }
      />
      <DashboardSummary
        description2="lorem ipsum dolor ismet"
        description="Percentage Complete"
        img={
          <Image
            quality={100}
            width={94}
            height={83}
            alt="1"
            src={"/images/sum4.png"}
          />
        }
        title="65%"
      />
    </div>
  );
}

export default DashboardSummaries;
