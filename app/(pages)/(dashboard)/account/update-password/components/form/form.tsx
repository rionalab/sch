"use client";

import React, { memo, useEffect, useState } from "react";
import { Alert, Col, Form, Input, Row } from "antd";
import { type FormFields } from "../../type";
import { ButtonForm } from "@/c";
import { store } from "../../action";
import { notifUpdateSuccess, notifUpdateError, urls, messages } from "@/consts";
import { useAntdContext } from "@/contexts";
import { fieldRules } from "@/libs/helpers";
import { useSession } from "next-auth/react";
import type { UserSession } from "@/types";
import { useRouter } from "next/navigation";

const initialValues = {
  oldPassword: "",
};

function FormUpdatePassword() {
  const [loading, setLoading] = useState(false);
  const { api } = useAntdContext();
  const router = useRouter();
  const [form] = Form.useForm();
  const { data: session } = useSession();
  const { hasUpdatePassword, id } = (session?.user as UserSession) || {};
  const rules = fieldRules(["required", "min:8"]);
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-boolean-literal-compare
  const mustUpdatePassword = hasUpdatePassword === false;

  const onFinish = async (values: FormFields): Promise<void> => {
    try {
      const msg = messages.updateSuccess + ". Please re-login.";
      setLoading(true);
      await store({ ...values, id });
      api?.success(notifUpdateSuccess(msg));
      router.push(urls.auth.signout);
    } catch (e: any) {
      const msg = String(e.message);

      api?.error(notifUpdateError(msg));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      form.setFieldsValue({
        oldPassword: "",
      });
    }, 100);
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
        {mustUpdatePassword && (
          <Alert
            message="You have not udpated your default password. Please update your password first."
            type="warning"
            showIcon
          />
        )}

        <br />

        <Row gutter={24}>
          <Col span={13}>
            <Form.Item<FormFields>
              label="Old Password"
              name="oldPassword"
              rules={rules}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item<FormFields>
              label="New Password"
              name="newPassword"
              rules={rules}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item<FormFields>
              label="Confirm Password"
              name="newPasswordConfirm"
              rules={rules}
            >
              <Input.Password />
            </Form.Item>
          </Col>
          <Col span={10}></Col>
        </Row>

        <ButtonForm loading={loading} />
      </Form>
    </div>
  );
}

export default memo(FormUpdatePassword);
