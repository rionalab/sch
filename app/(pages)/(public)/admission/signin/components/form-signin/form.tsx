"use client";

import { urls } from "@/consts";
import { fieldRules } from "@/libs/helpers";
import { CheckOutlined } from "@ant-design/icons";
import { Alert, Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import type { FormFields } from "../../types";
import { signIn } from "./action";
import styles from "./styles.module.scss";

const baseUrl = process.env.NEXT_PUBLIC_APP_URL;

interface Props {
  activeForm: string;
}

function FormSignin({ activeForm }: Props) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();

  const onFinish = async ({
    username,
    password,
  }: FormFields): Promise<void> => {
    try {
      setLoading(true);

      const login = await signIn({
        username,
        password,
      });

      localStorage.setItem("auth", String(login?.id));
      router.push(urls.admission.dashboard);
    } catch (e: any) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    setError(false);

    form.setFieldsValue({
      username: "",
      password: "",
      confirm_password: "",
    });
  }, [activeForm]);

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
