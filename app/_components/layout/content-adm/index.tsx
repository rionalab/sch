"use client";

import React from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import styles from "./styles.module.scss";

export function ContentAdm({ children }: { children: React.ReactNode }) {
  return (
    <SimpleBar className={styles.simplebar}>{children}</SimpleBar>
  );
}

