import React from "react";
import styles from "./styles.module.scss";
import { SidebarAdm, ContentAdm } from "@/c";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.bg}>
    <div className={styles.container}>
      <SidebarAdm />
      <div className={styles.content}>
        <ContentAdm>
          {children}
        </ContentAdm>
        </div>
    </div>
    </div>
  );
}
