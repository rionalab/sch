import { ContentAdm, SidebarAdm } from "@/c";
import React from "react";
import AdmissionAuth from "./AdmissionAuth";
import styles from "./styles.module.scss";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AdmissionAuth>
      <div className={styles.bg}>
        <div className={styles.container}>
          <SidebarAdm />
          <div className={styles.content}>
            <ContentAdm>{children}</ContentAdm>
          </div>
        </div>
      </div>
    </AdmissionAuth>
  );
}
