"use client";

import React, { memo, useEffect, useState } from "react";
import { Button, Col, Form, Input, Row, Select, Space } from "antd";
import { type FormFields } from "../../type";
import { ButtonForm, LoadingModule } from "@/c";
import { store, show } from "../../action";
import { useParams, useRouter } from "next/navigation";
import {
  notifStoreSuccess,
  notifStoreError,
  notifUpdateSuccess,
  notifUpdateError,
  userTypeOptions,
  trueFalseOptions,
} from "@/consts";
import { useAntdContext } from "@/contexts";
import { fieldRules, randomString, selectOptions } from "@/libs/helpers";
import { SyncOutlined } from "@ant-design/icons";
import useData from "@/hooks/useData";

const initialValues = {
  roleAccess: userTypeOptions[0].value,
  userPassword: randomString(),
  active: true,
};

interface Props {
  roles: Array<{
    id: number;
    name: string;
  }>;
}

function FormUser({ roles = [] }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { api } = useAntdContext();
  const { id } = useParams();
  const [form] = Form.useForm();
  const [loadingEdit, setLoadingEdit] = useState(false);
  const {
    loading: loadingData,
    data: { role, department },
  } = useData(["department", "role"]);

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

    form.setFieldsValue({
      ...dataEdit,
      roleId: String(dataEdit?.roleId),
      departmentId: String(dataEdit?.departmentId),
    });

    setLoadingEdit(false);
  };

  const generatePassword = () => {
    form.setFieldsValue({
      userPassword: randomString(),
    });
  };

  useEffect(() => {
    if (id) {
      void fetchDataEdit();
    }
  }, []);

  // using regular input cant update the value
  const MyInput = ({ value = "", ...rest }) => {
    return (
      <Space.Compact>
        <Input value={value} {...rest} />
        <Button onClick={generatePassword} icon={<SyncOutlined />} />
      </Space.Compact>
    );
  };

  return (
    <div>
      {loadingEdit && <LoadingModule />}
      <Form
        name="basic"
        className={loadingEdit ? "dNone" : ""}
        labelCol={{ span: 8 }}
        disabled={loadingData}
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
              label="Role"
              name="roleId"
              rules={fieldRules(["required"])}
            >
              <Select
                loading={loadingData}
                options={selectOptions(role, "name", "id")}
              />
            </Form.Item>

            <Form.Item<FormFields>
              label="Department"
              rules={fieldRules(["required"])}
              name="departmentId"
            >
              <Select
                loading={loadingData}
                options={selectOptions(department, "name", "id")}
              />
            </Form.Item>

            <Form.Item<FormFields>
              label="Name"
              name="name"
              rules={fieldRules(["required"])}
            >
              <Input />
            </Form.Item>

            <Form.Item<FormFields>
              label="Email"
              name="email"
              rules={fieldRules(["required", "email"])}
            >
              <Input />
            </Form.Item>

            {!id && (
              <Form.Item<FormFields>
                label="Password"
                name="userPassword"
                rules={fieldRules(["required"])}
              >
                <MyInput />
              </Form.Item>
            )}

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

export default memo(FormUser);
