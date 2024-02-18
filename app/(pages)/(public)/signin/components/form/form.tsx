"use client";

import React, { useState } from "react";
import { fieldRules } from "@/libs/helpers";
import { Form, Input, Button, Alert } from "antd";
import type { FormFields } from "../../types";
import { signIn } from "next-auth/react";
import { CheckOutlined } from "@ant-design/icons";
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";

function FormSignin() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();

  const onFinish = async ({
    username,
    password,
  }: FormFields): Promise<void> => {
    setLoading(true);

    const login = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    setLoading(false);

    if (!login?.ok) {
      setError(true);
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <Form
      name="basic"
      onFinish={onFinish}
      onValuesChange={() => {
        setError(false);
      }}
      form={form}
      layout="vertical"
      className={styles.form}
      size={"large"}
      autoComplete="off"
    >
      {error && (
        <Alert
          message="Login Fail. Check your credential"
          type="error"
          showIcon
          style={{ marginBottom: 16 }}
        />
      )}

      <Form.Item<FormFields>
        label="Email"
        name="username"
        rules={fieldRules(["required"])}
      >
        <Input placeholder="Input email" />
      </Form.Item>

      <Form.Item<FormFields>
        label="Password"
        className={styles.input}
        name="password"
        rules={fieldRules(["required"])}
      >
        <Input.Password placeholder="Input password" />
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
