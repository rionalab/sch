"use client";

import React, { memo, useEffect, useState } from "react";
import { Col, Form, Input, Row, Select } from "antd";
import { type FormFields } from "../../type";
import { ButtonForm } from "@/c";
import { store, show } from "../../action";
import { useParams, useRouter } from "next/navigation";
import {
  positionCategoryOptions,
  notifStoreSuccess,
  notifStoreError,
  notifUpdateSuccess,
  notifUpdateError,
  trueFalseOptions,
} from "@/consts";
import { useAntdContext } from "@/contexts";

const initialValues = {
  category: "Edu",
  active: true,
};

function FormPosition() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { api } = useAntdContext();
  const { id } = useParams();
  const [form] = Form.useForm();

  const onFinish = async (values: FormFields): Promise<void> => {
    const isEdit = values.id;

    try {
      setLoading(true);

      await store(values);

      api?.success(isEdit ? notifUpdateSuccess() : notifStoreSuccess());
      router.back();
    } catch (e: any) {
      const msg = String(e.message);

      api?.error(isEdit ? notifUpdateError(msg) : notifStoreError(msg));
    } finally {
      setLoading(false);
    }
  };

  const fetchDataEdit = async () => {
    const dataEdit = await show(Number(id));
    form.setFieldsValue(dataEdit);
  };

  useEffect(() => {
    if (id) {
      void fetchDataEdit();
    }
  }, []);

  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ ...initialValues, id }}
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onFinish={onFinish}
        form={form}
        autoComplete="off"
      >
        <br />
        <Row gutter={24}>
          <Col span={13}>
            <Form.Item<FormFields> hidden label="Id" name="id">
              <Input type="hidden" />
            </Form.Item>

            {id && (
              <Form.Item<FormFields> label="Code" name="code">
                <Input disabled />
              </Form.Item>
            )}

            <Form.Item<FormFields>
              label="Position Name"
              name="name"
              rules={[{ required: true, message: "Field is required" }]}
            >
              <Input type="" />
            </Form.Item>

            <Form.Item<FormFields> label="Category" name="category">
              <Select options={positionCategoryOptions} />
            </Form.Item>

            <Form.Item<FormFields>
              label="Description"
              name="description"
              rules={[{ required: true, message: "Field is required" }]}
            >
              <Input.TextArea />
            </Form.Item>

            <Form.Item<FormFields> label="Active" name="active">
              <Select options={trueFalseOptions} />
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
