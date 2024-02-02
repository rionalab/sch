"use client";

import React, { memo, useEffect, useState } from "react";
import { Col, Form, Input, Row, Select } from "antd";
import { type Store, type VendorFields } from "../type";
import { ButtonForm } from "@/c";
import { createVendor, findVendor } from "../action";
import { useParams, useRouter } from "next/navigation";
import {
  notifStoreSuccess,
  notifStoreError,
  notifUpdateSuccess,
  notifUpdateError,
  trueFalseOptions,
} from "@/consts";
import { useAntdContext } from "@/contexts";
import { fieldRules } from "@/libs/helpers";
import { faker } from "@faker-js/faker";

const initialValues = {
  // blacklist: false,
  // name: faker.person.fullName(),
  // accountNo: "00000000000",
  // address: faker.location.streetAddress(),
  // phone: faker.phone.number(),
  // remarks: "something over the rainbow",
};

function FormVendor() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { api } = useAntdContext();
  const { id } = useParams();
  const [form] = Form.useForm();

  const onFinish = async (values: VendorFields): Promise<void> => {
    const isEdit = values.id;

    try {
      setLoading(true);

      await createVendor(values);

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
    const dataEdit = await findVendor(Number(id));
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
            <Form.Item<VendorFields> hidden label="Id" name="id">
              <Input type="hidden" />
            </Form.Item>

            <Form.Item<VendorFields>
              label="Name"
              name="name"
              rules={fieldRules(["required"])}
            >
              <Input />
            </Form.Item>

            <Form.Item<VendorFields>
              label="Account No."
              name="accountNo"
              rules={fieldRules(["required"])}
            >
              <Input />
            </Form.Item>

            <Form.Item<VendorFields>
              label="Phone"
              name="phone"
              rules={fieldRules(["required"])}
            >
              <Input />
            </Form.Item>

            <Form.Item<VendorFields> label="Blacklist" name="blacklist">
              <Select options={trueFalseOptions} />
            </Form.Item>

            <Form.Item<VendorFields>
              label="Address"
              name="address"
              rules={fieldRules(["required"])}
            >
              <Input.TextArea />
            </Form.Item>

            <Form.Item<VendorFields> label="Remarks" name="remarks">
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
