"use client";

import React from "react";
import { useEffect, useState } from "react";
import { CheckOutlined } from "@ant-design/icons";
import {
  fieldRules,
  prismaToForm,
  today,
  uploadFileClient,
} from "@/libs/helpers";
import { useParams, useRouter } from "next/navigation";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Typography,
} from "antd";
import { IFormParent } from "../type";
import FormParents from "../../registration/components/form-parents";
import { newParentData, update } from "../action";
import FormSignin from "@/pages/(public)/signin/components/form/form";

const initialValues: IFormParent = {};

function FormParent({ setEdit, setCounter, defaultData }: any) {
  const [form] = Form.useForm();
  const [loadingEdit, setLoadingEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingForm, setLoadingForm] = useState(false);
  const { id } = useParams();
  const router = useRouter();

  const onFinish = async (values: IFormParent) => {
    //  const isEdit = values.id;
    try {
      setLoadingForm(true);
      if (defaultData) {
        await update(defaultData.id, JSON.stringify(values));
        router.refresh();
      } else {
        const parentId = localStorage.getItem("auth");
        await newParentData(Number(parentId), JSON.stringify(values));
        setCounter(Math.floor(Math.random() * (111 - 1 + 1)) + 1);
      }
    } catch (e: any) {
      const msg = String(e.message);
      console.error(msg);
      // api?.error(isEdit ? notifUpdateError(msg) : notifStoreError(msg));
    } finally {
      setLoadingForm(false);
      setEdit(false);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (defaultData) {
      const x = JSON.parse(defaultData.data);
      if (x) {
        form.setFieldsValue(x);
      }
    }
  }, []);

  return (
    <>
      {/* <FormParents nextStep={() => null} prevStep={() => null} /> */}

      <Form
        name="basic"
        labelCol={{ span: 8 }}
        labelWrap
        className={loadingEdit ? "dNone" : ""}
        // wrapperCol={{ span: 24 }}
        initialValues={{ ...initialValues, id }}
        form={form}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item<IFormParent> hidden label="Id" name="id">
          <Input type="hidden" />
        </Form.Item>

        <Row gutter={24}>
          <Col span={24}>
            <br />
            <Form.Item<IFormParent>
              label="Father's Name"
              name="fatherName"
              rules={fieldRules(["required"])}
            >
              <Input />
            </Form.Item>

            <Form.Item<IFormParent>
              label="Mother's Name"
              name="motherName"
              rules={fieldRules(["required"])}
            >
              <Input />
            </Form.Item>

            <Form.Item<IFormParent>
              label="Contact Number"
              wrapperCol={{ span: 8 }}
              name="contactNumber"
              rules={fieldRules(["required"])}
            >
              <Input />
            </Form.Item>

            <Form.Item<IFormParent>
              label="Email"
              wrapperCol={{ span: 12 }}
              name="email"
              rules={fieldRules(["required"])}
            >
              <Input />
            </Form.Item>

            <Form.Item<IFormParent>
              label="Address"
              rules={fieldRules(["required"])}
              name="address"
            >
              <Input.TextArea />
            </Form.Item>
          </Col>
          <Col offset={8}>
            <button disabled={loadingForm} className="custom yellow">
              <CheckOutlined />
              {loadingForm ? "Saving..." : "Save"}
            </button>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default FormParent;
