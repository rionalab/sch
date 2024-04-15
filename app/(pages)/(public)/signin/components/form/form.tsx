"use client";

import { urls } from "@/consts";
import { fieldRules } from "@/libs/helpers";
import { CheckOutlined } from "@ant-design/icons";
import { Alert, Button, Form, Input } from "antd";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { FormFields } from "../../types";
import styles from "./styles.module.scss";

const baseUrl = process.env.NEXT_PUBLIC_APP_URL;

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

    try {
      const login = await signIn("credentials", {
        username,
        password,
        redirect: false,
      });

      if (!login?.ok) {
        setLoading(false);
        setError(true);
      } else {
        if (!localStorage.getItem("roleActions")) {
          const url = `${baseUrl}/api/user`;
          const user = await fetch(url);
          const data = await user.json();
          localStorage.setItem("roleActions", `${data.role.actions}`);

          if (data.hasUpdatePassword) {
            router.push(urls.landingPage);
          } else {
            router.push(urls.account.updatePassword.index);
          }
        }
      }
    } catch (e) {
      console.error(e);
      setLoading(false);
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
