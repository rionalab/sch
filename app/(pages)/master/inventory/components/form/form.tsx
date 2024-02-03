"use client";

import React, { memo, useEffect, useState } from "react";
import { Col, Form, Input, Row, Select } from "antd";
import { type FormFields } from "../../type";
import { ButtonForm } from "@/c";
import { store, get } from "../../action";
import { useParams, useRouter } from "next/navigation";
import * as notif from "@/consts";
import { useAntdContext } from "@/contexts";
import { fieldRules } from "@/libs/helpers";
import useSelect from "@/hooks/useSelect";

const initialValues = {};

function FormVendor() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { api } = useAntdContext();
  const { id } = useParams();
  const [form] = Form.useForm();
  const { department, employee } = useSelect(["department"]);

  console.log(department, employee);

  const onFinish = async (values: FormFields): Promise<void> => {
    const isEdit = values.id;

    try {
      setLoading(true);

      await store(values);

      api?.success(
        isEdit ? notif.notifUpdateSuccess() : notif.notifStoreSuccess()
      );
      router.back();
    } catch (e: any) {
      const msg = String(e.message);

      api?.error(
        isEdit ? notif.notifUpdateError(msg) : notif.notifStoreError(msg)
      );
    } finally {
      setLoading(false);
    }
  };

  const fetchDataEdit = async () => {
    const dataEdit = await get(Number(id));
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
            <Form.Item<FormFields>
              label="Code"
              name="code"
              rules={fieldRules(["required"])}
            >
              <Input />
            </Form.Item>
            <Form.Item<FormFields>
              label="Name"
              name="name"
              rules={fieldRules(["required"])}
            >
              <Input />
            </Form.Item>
            <Form.Item<FormFields>
              label="Unit"
              name="UOM"
              rules={fieldRules(["required"])}
            >
              <Input />
            </Form.Item>
            <Form.Item<FormFields> label="Department" name="departmentId">
              <Select options={department} />
            </Form.Item>
            <Form.Item<FormFields> label="Remarks" name="remarks">
              <Input.TextArea />
            </Form.Item>
          </Col>
          <Col span={10}></Col>
        </Row>

        <ButtonForm loading={loading} />
      </Form>
    </div>
  );
}

export default memo(FormVendor);
