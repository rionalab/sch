"use client";

import React from "react";
import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

export function ButtonBack() {
  const router = useRouter();

  return (
    <>
      <Button
        onClick={() => {
          router.back();
        }}
        // shape="circle"
        // size="large"
        icon={<ArrowLeftOutlined />}
        htmlType="submit"
        style={{ marginTop: -20 }}
      >
        Back
      </Button>
      <br />
      <br />
    </>
  );
}
