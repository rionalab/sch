"use client";

import React from "react";
import styles from "./styles.module.scss";
import ColsLeft from "../cols-left";
import ColsRight from "../cols-right";

function Cols() {
  return (
    <div className={styles.cols}>
      <ColsLeft />
      <ColsRight />
    </div>
  );
}

export default Cols;
