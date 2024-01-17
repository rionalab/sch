"use client";
import React from "react";
import { Flex, Spin, Typography } from "antd";

function loading() {
  return (
    <Flex
      style={{ marginTop: "20vh" }}
      vertical
      justify="center"
      align="center"
      gap="middle"
    >
      <Spin />
      <Typography.Text style={{ opacity: 0.7 }}>Please wait...</Typography.Text>
    </Flex>
  );
}

export default loading;
