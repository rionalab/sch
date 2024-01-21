"use client";

import React, { memo, useState } from "react";
import { Col, Form, Input, Row, Select } from "antd";
import { FieldType } from "../type";
import { ButtonForm } from "@/c";
import { store } from "../action";
import { useRouter } from "next/navigation";
import {
  positionCategoryOptions,
  notifStoreSuccess,
  notifStoreError,
} from "@/consts";
import { useAntdContext } from "@/contexts";

const initialValues = {
  category: "Edu",
};

const onFinish = () => {};

function FormEmployee() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { api } = useAntdContext();

  const onFinish = async (values: any) => {
    try {
      setLoading(true);
      const data = {
        ...values,
      };
      await store(data);
      api?.success(notifStoreSuccess());
      router.back();
    } catch (e: any) {
      api?.error(notifStoreError(e.message));
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  console.log(111123);

  return (
    <div>
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
          <Col span={13}>
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

export default memo(FormEmployee);
