"use client";

import { ButtonForm } from "@/c";
import {
  documentTypeOptions,
  notifStoreError,
  notifStoreSuccess,
  notifUpdateError,
  notifUpdateSuccess,
  payOrFreeOptions,
  trueFalseOptions,
} from "@/consts";
import { useAntdContext } from "@/contexts";
import { fieldRules } from "@/libs/helpers";
import { faker } from "@faker-js/faker";
import { Col, Form, Input, InputNumber, Row, Select } from "antd";
import { useParams, useRouter } from "next/navigation";
import { memo, useEffect, useState } from "react";
import { show, store } from "../../action";
import { type FormFields } from "../../type";

const initialValues = {
  type: documentTypeOptions[0].value,
  isPaid: payOrFreeOptions[0].value,
  active: true,
  name: faker.person.fullName(),
};

function FormCrud() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { api } = useAntdContext();
  const { id } = useParams();
  const [form] = Form.useForm();
  const isPaid = Form.useWatch("isPaid", form);

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
    const isPaid = dataEdit?.isPaid ? "paid" : "free";
    form.setFieldsValue({ ...dataEdit, isPaid });
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

            <Form.Item<FormFields>
              label="Name"
              name="name"
              rules={fieldRules(["required"])}
            >
              <Input />
            </Form.Item>

            <Form.Item<FormFields>
              label="type"
              name="type"
              rules={fieldRules(["required"])}
            >
              <Select options={documentTypeOptions} />
            </Form.Item>

            <Form.Item<FormFields>
              label="is Paid?"
              name="isPaid"
              rules={fieldRules(["required"])}
            >
              <Select
                onChange={(v) => {
                  if (v === "free") {
                    form.setFieldsValue({ price: "" });
                  }
                }}
                options={payOrFreeOptions}
              />
            </Form.Item>

            {isPaid !== "free" && (
              <Form.Item<FormFields>
                label="price"
                rules={fieldRules(["required"])}
                name="price"
              >
                <InputNumber style={{ width: "50%" }} />
              </Form.Item>
            )}

            <Form.Item<FormFields> label="remarks" name="remarks">
              <Input.TextArea />
            </Form.Item>

            <Form.Item<FormFields>
              label="Active"
              name="active"
              rules={fieldRules(["required"])}
            >
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

export default memo(FormCrud);
