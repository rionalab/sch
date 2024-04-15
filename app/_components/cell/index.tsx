import React from "react";
import { red, green } from "@ant-design/colors";

interface Props {
  label?: string;
  bold?: boolean;
  theme?: "green" | "red";
}

export function Cell({ label = "", bold, theme }: Props) {
  const color =
    theme === "green" ? green[6] : theme === "red" ? red[5] : "black";

  return (
    <span style={{ color }} className={`${bold ? "textBold700" : ""}`}>
      {label}
    </span>
  );
}
