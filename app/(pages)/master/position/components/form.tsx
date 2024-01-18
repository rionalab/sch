/* eslint-disable  */

"use client";

import React, { useState } from "react";
import { Button, Col, Form, Input, Row, Select } from "antd";
import { FieldType } from "../type";
import { CheckOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { positionCategoryOptions } from "@/consts/form";
import { ButtonBack, ButtonForm } from "@/c";
import { store } from "../action";
import { usePathname, redirect, useRouter } from "next/navigation";
import { urls } from "@/consts/urls";

function FormEmployee() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const initialValues = {
    category: "Edu",
  };

  const onFinish = async (values: any) => {
    try {
      setLoading(true);
      const redirectUrl = urls.master.position.index;
      const data = {
        ...values,
        redirectUrl,
      };
      const result = await store(data);

      router.back();
    } catch (e: any) {
      // console.log(e, e.message);

      alert(e.message);
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <ButtonBack />
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={initialValues}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <br />
        <Row gutter={24}>
          <Col offset={1} span={10}>
            <Form.Item<FieldType>
              label="Position Name"
              name="name"
              rules={[{ required: true, message: "Field is required" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item<FieldType> label="Category" name="category">
              <Select options={positionCategoryOptions} />
            </Form.Item>
          </Col>
          <Col span={10}></Col>
        </Row>

        <ButtonForm loading={loading} />
      </Form>
    </div>
  );
}

export default FormEmployee;
