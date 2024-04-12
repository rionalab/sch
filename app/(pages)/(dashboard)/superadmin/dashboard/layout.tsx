import React from "react";
import styles from "./styles.module.scss";
import { SidebarAdm } from "@/c";
import ContentAdm from "@/app/_components/layout/content-adm";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.layout}>
      <SidebarAdm />
      <ContentAdm>{children}</ContentAdm>
    </div>
  );
}

export default Layout;
