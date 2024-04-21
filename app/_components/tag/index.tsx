import { blue, green, red } from "@ant-design/colors";
import { Tag as TagAntd } from "antd";

interface Props {
  theme: "green" | "red" | "blue";
  label: string;
}

export function Tag({ theme, label }: Props) {
  let themeColor = "";

  if (theme === "green") {
    themeColor = green[5];
  } else if (theme === "red") {
    themeColor = red?.primary ?? "";
  } else if (theme === "blue") {
    themeColor = blue?.primary ?? "";
  }
  return <TagAntd color={themeColor}>{label}</TagAntd>;
}
