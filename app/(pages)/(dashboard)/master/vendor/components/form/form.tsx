"use client";

import { ButtonForm, LoadingModule } from "@/c";
import {
  notifStoreError,
  notifStoreSuccess,
  notifUpdateError,
  notifUpdateSuccess,
  trueFalseOptions,
} from "@/consts";
import { useAntdContext } from "@/contexts";
import { fieldRules } from "@/libs/helpers";
import { Col, Form, Input, Row, Select } from "antd";
import { useParams, useRouter } from "next/navigation";
import { memo, useEffect, useState } from "react";
import { show, store } from "../../action";
import { type FormFields } from "../../type";
// import { faker } from "@faker-js/faker";

const initialValues = {
  blacklist: false,
  // name: faker.person.fullName(),
  // accountNo: "00000000000",
  // address: faker.location.streetAddress(),
  // phone: faker.phone.number(),
  // fax: faker.phone.number(),
  // remarks: "something over the rainbow",
};

function FormVendor() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [loadingEdit, setLoadingEdit] = useState(false);
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
      {loadingEdit && <LoadingModule />}
      <Form
        className={loadingEdit ? "dNone" : ""}
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
            <Form.Item<FormFields> hidden name="id">
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
              label="Account No."
              name="accountNo"
              rules={fieldRules(["required"])}
            >
              <Input />
            </Form.Item>

            <Form.Item<FormFields>
              label="Phone"
              name="phone"
              rules={fieldRules(["required"])}
            >
              <Input />
            </Form.Item>

            <Form.Item<FormFields> label="Fax" name="fax">
              <Input />
            </Form.Item>

            <Form.Item<FormFields> label="Blacklist" name="blacklist">
              <Select options={trueFalseOptions} />
            </Form.Item>

            <Form.Item<FormFields>
              label="Address"
              name="address"
              rules={fieldRules(["required"])}
            >
              <Input.TextArea />
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
