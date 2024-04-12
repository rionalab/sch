"use client";

import React, { memo, useEffect, useState } from "react";
import { Col, Form, Input, Row, Select } from "antd";
import { type FormFields } from "../../type";
import { ButtonForm, LoadingModule } from "@/c";
import { store, get } from "../../action";
import { useParams, useRouter } from "next/navigation";
import * as inventory from "@/consts";
import { useAntdContext } from "@/contexts";
import { fieldRules } from "@/libs/helpers";
import useSelect from "@/hooks/useSelect";

const initialValues = {
  // name: "inv a",
  // uomId: 1,
  // departmentId: 1,
  // remarks: "string",
  // category: "consumables",
};

function FormVendor() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { api } = useAntdContext();
  const [loadingEdit, setLoadingEdit] = useState(false);
  const { id } = useParams();
  const [form] = Form.useForm();
  const { department, uom } = useSelect(["department", "uom"]);

  const onFinish = async (values: FormFields): Promise<void> => {
    const isEdit = values.id;

    try {
      setLoading(true);

      await store(values);

      api?.success(
        isEdit ? inventory.notifUpdateSuccess() : inventory.notifStoreSuccess(),
      );
      router.back();
    } catch (e: any) {
      const msg = String(e.message);

      api?.error(
        isEdit
          ? inventory.notifUpdateError(msg)
          : inventory.notifStoreError(msg),
      );
    } finally {
      setLoading(false);
    }
  };

  const fetchDataEdit = async () => {
    setLoadingEdit(true);
    const dataEdit = await get(Number(id));
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
      {loadingEdit && <LoadingModule />}

      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ ...initialValues, id }}
        onFinish={onFinish}
        form={form}
        autoComplete="off"
        className={loadingEdit ? "dNone" : ""}
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
              label="Name"
              name="name"
              rules={fieldRules(["required"])}
            >
              <Input />
            </Form.Item>
            <Form.Item<FormFields>
              label="Unit"
              name="uomId"
              rules={fieldRules(["required"])}
            >
              <Select options={uom} />
            </Form.Item>
            <Form.Item<FormFields>
              label="Category"
              name="category"
              rules={fieldRules(["required"])}
            >
              <Select options={inventory.inventoryCategoryOptions} />
            </Form.Item>
            <Form.Item<FormFields>
              label="Department"
              name="departmentId"
              rules={fieldRules(["required"])}
            >
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
