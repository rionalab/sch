"use client";

import { useAntdContext } from "@/contexts";
import { fieldRules } from "@/libs/helpers";
import { CheckOutlined } from "@ant-design/icons";
import { Alert, Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import type { FormFieldsRegister } from "../../types";
import { store } from "./action";
import styles from "./styles.module.scss";

interface Props {
  toggleForm: () => void;
  activeForm: string;
}

function FormRegister({ toggleForm, activeForm }: Props) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();
  const { api } = useAntdContext();

  const onFinish = async (data: FormFieldsRegister): Promise<void> => {
    try {
      const { username, password, confirm_password } = data;

      if (password !== confirm_password) {
        setErrorMsg("Password confirmation not match!");
        return;
      }

      setLoading(true);

      const register = await store(data);

      api?.success({
        message: "Sign Up Success",
        description: "Your account has been created successfully.",
      });

      toggleForm();
    } catch (e: any) {
      api?.error({
        message: "Sign Up Error",
        description: e.message,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
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
      initialValues={{}}
      onValuesChange={() => {
        setErrorMsg("");
      }}
      form={form}
      layout="vertical"
      className={styles.form}
      size={"large"}
      autoComplete="off"
    >
      {errorMsg && (
        <Alert
          message={errorMsg}
          type="error"
          showIcon
          style={{ marginBottom: 16 }}
        />
      )}

      <Form.Item<FormFieldsRegister>
        label="Email"
        name="username"
        rules={fieldRules(["required", "email"])}
      >
        <Input placeholder="Input email" />
      </Form.Item>

      <Form.Item<FormFieldsRegister>
        label="Password"
        className={styles.input}
        name="password"
        rules={fieldRules(["required"])}
      >
        <Input.Password placeholder="Input password" />
      </Form.Item>

      <Form.Item<FormFieldsRegister>
        label="Confirm Password"
        className={styles.input}
        name="confirm_password"
        rules={fieldRules(["required"])}
      >
        <Input.Password placeholder="Confirm password" />
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
        {loading ? "Please wait..." : "Sign Up"}
      </Button>
    </Form>
  );
}

export default FormRegister;
