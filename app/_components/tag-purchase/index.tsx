import React from "react";
import { Tag as TagAntd } from "antd";
import { red, blue, green, gold, gray } from "@ant-design/colors";

interface Props {
  status:
    | "pending"
    | "approved"
    | "rejected"
    | "progress"
    | "completed"
    | "cancelled";
}

export function TagPurchase({ status }: Props) {
  let themeColor = "";
  let label = "";

  if (status === "pending") {
    themeColor = gray[1];
    label = "Pending";
  } else if (status === "approved") {
    themeColor = gold[6];
    label = "Approved";
  } else if (status === "rejected") {
    themeColor = red?.primary ?? "";
    label = "Rejected";
  } else if (status === "progress") {
    themeColor = blue[6];
    label = "Progress";
  } else if (status === "completed") {
    themeColor = green[6];
    label = "Completed";
  } else if (status === "cancelled") {
    themeColor = gray[7];
    label = "Cancelled";
  }

  return <TagAntd color={themeColor}>{label}</TagAntd>;
}
