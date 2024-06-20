import React, { useEffect, useState } from "react";
import { CheckOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Typography } from "antd";
import { storeLocalStorage } from "@/pages/admission/helper";
import { notifStoreError, notifUpdateError } from "@/consts";
import { useAntdContext } from "@/contexts";

const initialValues2 = {
  vehicle1A: "vehicle1A",
  vehicle1B: "vehicle1B",
  vehicle1C: "vehicle1C",
  vehicle1D: "vehicle1D",
  vehicle1E: "vehicle1E",
  vehicle1F: "vehicle1F",

  vehicle2A: "vehicle2A",
  vehicle2B: "vehicle2B",
  vehicle2C: "vehicle2C",
  vehicle2D: "vehicle2D",
  vehicle2E: "vehicle2E",
  vehicle2F: "vehicle2F",
};
const initialValues = {};
const storageName = "studentRegistration3";

interface Props {
  nextStep: () => void;
  prevStep: () => void;
}

function Vehicle({ nextStep, prevStep }: Props) {
  const [loadingEdit, setLoadingEdit] = useState(false);
  const { api } = useAntdContext();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleFormChange = (changedValues: any, allValues: any) => {
    storeLocalStorage(storageName, allValues);
  };

  const onFinish = async (values: any) => {
    const isEdit = values.id;
    try {
      storeLocalStorage(storageName, {
        ...values,
      });

      nextStep();
    } catch (e: any) {
      const msg = String(e.message);
      api?.error(isEdit ? notifUpdateError(msg) : notifStoreError(msg));
    } finally {
      setLoading(false);
    }
  };

  const fetchDefault = () => {
    const stored = localStorage.getItem(storageName);
    if (stored) {
      const json = JSON.parse(stored);

      form.setFieldsValue({
        ...json,
      });
    }
  };

  useEffect(() => {
    fetchDefault();
  }, []);

  return (
    <div>
      <br />
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        labelWrap
        className={loadingEdit ? "dNone" : ""}
        initialValues={{ ...initialValues }}
        onValuesChange={handleFormChange}
        form={form}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Button onClick={() => form.setFieldsValue(initialValues2)}>
          Auto fill
        </Button>
        <br />
        <br />
        <p>
          *Pick up person / driver must be someone who held a driving license
          and above 18 years old
          <br />
          *You can register maximum 2 vehicles number to get the school sticker
          and student name card
          <br />
          *Copy in information must be informed to the school
        </p>
        <br />
        <br />

        <Row gutter={24}>
          <Col span={12}>
            <Typography.Title level={5}>Vehicle 1</Typography.Title>
            <br />

            <Form.Item<any> label="Plate Number (1)" name="vehicle1A">
              <Input />
            </Form.Item>

            <Form.Item<any> label="Plate Number (1)" name="vehicle1B">
              <Input />
            </Form.Item>

            <Form.Item<any> label="Pick up person name (1)" name="vehicle1C">
              <Input />
            </Form.Item>

            <Form.Item<any>
              label="Pick up person Phone Number (1)"
              name="vehicle1D"
            >
              <Input />
            </Form.Item>

            <Form.Item<any> label="Pick up person name (2)" name="vehicle1E">
              <Input />
            </Form.Item>

            <Form.Item<any>
              label="Pick up person Phone Number (2)"
              name="vehicle1F"
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Typography.Title level={5}>Vehicle 2</Typography.Title>
            <br />

            <Form.Item<any> label="Plate Number (1)" name="vehicle2A">
              <Input />
            </Form.Item>

            <Form.Item<any> label="Plate Number (1)" name="vehicle2B">
              <Input />
            </Form.Item>

            <Form.Item<any> label="Pick up person name (1)" name="vehicle2C">
              <Input />
            </Form.Item>

            <Form.Item<any>
              label="Pick up person Phone Number (1)"
              name="vehicle2D"
            >
              <Input />
            </Form.Item>

            <Form.Item<any> label="Pick up person name (2)" name="vehicle2E">
              <Input />
            </Form.Item>

            <Form.Item<any>
              label="Pick up person Phone Number (2)"
              name="vehicle2F"
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <br />
        <br />
        <Row gutter={24}>
          <Col span={21}>
            <Form.Item wrapperCol={{ offset: 4 }}>
              <Button
                onClick={() => {
                  prevStep();
                }}
                style={{ marginRight: 8 }}
                disabled={loading}
                htmlType="button"
              >
                Back
              </Button>

              <Button
                icon={<CheckOutlined />}
                disabled={loading}
                type="primary"
                style={{ paddingLeft: 50, paddingRight: 50 }}
                htmlType="submit"
              >
                Next
              </Button>
            </Form.Item>
          </Col>
          <Col></Col>
        </Row>
      </Form>
    </div>
  );
}

export default Vehicle;
