"use client";

import React, { memo, useEffect, useState } from "react";
import { Col, Form, Input, Row, Select } from "antd";
import { type FormFields } from "../../type";
import { store, show } from "../../action";
import { useParams, useRouter } from "next/navigation";
import * as notif from "@/consts";
import { useAntdContext } from "@/contexts";
import { fieldRules } from "@/libs/helpers";
import { ButtonForm, LoadingModule } from "@/c";

const initialValues = {
  active: true,
};

function FormVendor() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { api } = useAntdContext();
  const { id } = useParams();
  const [loadingEdit, setLoadingEdit] = useState(false);
  const [form] = Form.useForm();

  const onFinish = async (values: FormFields): Promise<void> => {
    const isEdit = values.id;

    try {
      setLoading(true);

      await store(values);

      api?.success(
        isEdit ? notif.notifUpdateSuccess() : notif.notifStoreSuccess(),
      );
      router.back();
    } catch (e: any) {
      const msg = String(e.message);

      api?.error(
        isEdit ? notif.notifUpdateError(msg) : notif.notifStoreError(msg),
      );
    } finally {
      setLoading(false);
    }
  };

  const fetchDataEdit = async () => {
    setLoadingEdit(true);
    const dataEdit = await show(Number(id));
    form.setFieldsValue(dataEdit);
    setLoadingEdit(false);
  };

  useEffect(() => {
    if (id) {
      void fetchDataEdit();
    }
  }, []);

  return (
    <div>
      {loadingEdit && <LoadingModule />}{" "}
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        className={loadingEdit ? "dNone" : ""}
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

            <Form.Item<FormFields> hidden={!id} label="Code" name="code">
              <Input disabled />
            </Form.Item>

            <Form.Item<FormFields>
              label="Name"
              name="name"
              rules={fieldRules(["required"])}
            >
              <Input />
            </Form.Item>

            <Form.Item<FormFields>
              label="Description"
              name="description"
              rules={fieldRules(["required"])}
            >
              <Input.TextArea />
            </Form.Item>

            <Form.Item<FormFields>
              label="Active"
              name="active"
              rules={fieldRules(["required"])}
            >
              <Select options={notif.trueFalseOptions} />
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
