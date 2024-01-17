"use client";

import React from "react";
import { Button, Col, Form, Input, Row, Select } from "antd";
import { FieldType } from "../type";
import { CheckOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { positionCategoryOptions } from "@/consts/form";
import { ButtonBack, ButtonForm } from "@/c";
import { store } from "../action";
import { useFormState, useFormStatus } from "react-dom";

const initialState = {
  message: "",
  id: 0,
  name: "",
  category: "Edu" as const,
};

function FormEmployee() {
  const { pending } = useFormStatus();

  const initialValues = {
    category: "Edu",
  };

  const onFinish = async (values: any) => {
    console.log("Success:", values);
    await formAction();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      {pending && <p>1111111111111111111111111111</p>}
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

        <ButtonForm />
      </Form>
    </div>
  );
}

export default FormEmployee;
