import React from "react";
import { HourglassOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { type Employee } from "../../type";

interface Props extends Employee {}

function LeaveEntitlement(props: Props) {
  const onClick = () => {};

  return (
    <>
      <Button
        onClick={onClick}
        title="Leave Entitlement"
        size="small"
        type="text"
        icon={<HourglassOutlined style={{ fontSize: 14 }} />}
      />
    </>
  );
}

export default LeaveEntitlement;
