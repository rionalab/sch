"use client";
import React, { useEffect, useState } from "react";
import { fieldRules } from "@/libs/helpers";
import { Form, Input, Button } from "antd";
import type { FormFields } from "../../types";
import { getCsrfToken, signIn } from "next-auth/react";
import { CheckOutlined } from "@ant-design/icons";
import styles from "./styles.module.scss";

function FormSignin() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const getCsrf = async () => {
    const csrfToken = await getCsrfToken();
    console.log(csrfToken);
    form.setFieldsValue({ csrfToken });
  };

  const onFinish = async ({
    username,
    password,
  }: FormFields): Promise<void> => {
    setLoading(true);
    const u = await signIn("credentials", {
      username,
      password,
    });
    console.log(u);
    setLoading(false);
  };

  useEffect(() => {
    void getCsrf();
  }, []);

  return (
    <Form
      name="basic"
      onFinish={onFinish}
      form={form}
      layout="vertical"
      className={styles.form}
      size={"large"}
      autoComplete="off"
    >
      <Form.Item<FormFields> hidden name="csrfToken">
        <Input type="hidden" />
      </Form.Item>

      <Form.Item<FormFields>
        label="Username"
        name="username"
        rules={fieldRules(["required"])}
      >
        <Input />
      </Form.Item>

      <Form.Item<FormFields>
        label="Password"
        className={styles.input}
        name="password"
        rules={fieldRules(["required"])}
      >
        <Input.Password />
      </Form.Item>

      <Button
        icon={<CheckOutlined />}
        block
        disabled={loading}
        className={styles.btn}
        size="large"
        type="primary"
        htmlType="submit"
      >
        {loading ? "Signing in..." : "Sign In"}
      </Button>
    </Form>
  );
}

export default FormSignin;
