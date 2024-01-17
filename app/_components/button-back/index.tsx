"use client";

import React from "react";
import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

function ButtonBack() {
  const router = useRouter();

  return (
    <>
      <Button
        onClick={() => router.back()}
        shape="circle"
        icon={<ArrowLeftOutlined />}
        size="large"
        htmlType="submit"
        style={{ marginTop: -20 }}
      ></Button>
      <br />
      <br />
    </>
  );
}

export default ButtonBack;
