import React from "react";
import { Tag as TagAntd } from "antd";
import { red, green } from "@ant-design/colors";

interface Props {
  theme: "green" | "red";
  label: string;
}

export function Tag({ theme, label }: Props) {
  let themeColor = "";

  if (theme === "green") {
    themeColor = green[5];
  } else if (theme === "red") {
    themeColor = red?.primary ?? "";
  }

  return <TagAntd color={themeColor}>{label}</TagAntd>;
}
