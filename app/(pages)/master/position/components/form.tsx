"use client";

import React, { memo, useEffect, useState } from "react";
import { Col, Form, Input, Row, Select } from "antd";
import { Position } from "../type";
import { ButtonForm } from "@/c";
import { createPosition } from "../action";
import { useParams, useRouter } from "next/navigation";
import {
  positionCategoryOptions,
  notifStoreSuccess,
  notifStoreError,
  notifUpdateSuccess,
  notifUpdateError,
} from "@/consts";
import { useAntdContext } from "@/contexts";
import { findFirst } from "@/libs/prisma/prismaClient";

const initialValues = {
  category: "Edu",
};

function FormPosition() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { api } = useAntdContext();
  const { id } = useParams();
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    let isEdit = values.id;

    try {
      setLoading(true);
      const data = {
        ...values,
      };

      await createPosition(data);

      api?.success(isEdit ? notifUpdateSuccess() : notifStoreSuccess());
      router.back();
    } catch (e: any) {
      api?.error(
        isEdit ? notifUpdateError(e.message) : notifStoreError(e.message)
      );
    } finally {
      setLoading(false);
    }
  };

  const fetchDataEdit = async () => {
    const dataEdit = await findFirst("position", { id: Number(id) });

    form.setFieldsValue(dataEdit);
  };

  useEffect(() => {
    if (id) {
      fetchDataEdit();
    }
  }, []);

  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ ...initialValues, id }}
        onFinish={onFinish}
        form={form}
        autoComplete="off"
      >
        <br />
        <Row gutter={24}>
          <Col span={13}>
            <Form.Item<Position> hidden label="Id" name="id">
              <Input type="hidden" />
            </Form.Item>

            <Form.Item<Position>
              label="Position Name"
              name="name"
              rules={[{ required: true, message: "Field is required" }]}
            >
              <Input type="" />
            </Form.Item>

            <Form.Item<Position> label="Category" name="category">
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

export default memo(FormPosition);
