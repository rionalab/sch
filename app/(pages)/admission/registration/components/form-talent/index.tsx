"use client";

import { LoadingModule } from "@/c";
import { notifStoreError, notifUpdateError } from "@/consts";
import { useAntdContext } from "@/contexts";
import { prismaToForm } from "@/libs/helpers";
import { VoidMethod } from "@/types";
import { CheckOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Form, Input, Row, Typography } from "antd";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { show } from "../../action";
import type { FormChildInterest, FormParentType } from "../../type";

const initialValues: Partial<FormChildInterest> = {
  preschoolName: "string",
  preschoolyear: "string",
  preschoolAddress: "string",

  primaryName: "string",
  primaryyear: "string",
  primaryAddress: "string",

  othersName: "string",
  othersyear: "string",
  othersAddress: "string",

  arts: "string",
  music: "string",
  cognitive: "string",
  sport: "string",
  organization: "string",
  others: "string",
};

interface Props {
  nextStep: VoidMethod;
  prevStep: VoidMethod;
}

function FormTalent({ nextStep, prevStep }: Props) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const { api } = useAntdContext();
  const { id } = useParams();
  const [loadingEdit, setLoadingEdit] = useState(false);

  const handleFormChange = (changedValues: any, allValues: any) => {};

  const onFinish = async (values: FormParentType) => {
    const isEdit = values.id;
    try {
      localStorage.setItem("studentRegistration3", JSON.stringify(values));
      nextStep();
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

    if (dataEdit) {
      form.setFieldsValue(
        prismaToForm({ ...dataEdit, photo: [], oldPhoto: dataEdit.photo }),
      );
    }
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
        name="basic"
        labelCol={{ span: 8 }}
        labelWrap
        className={loadingEdit ? "dNone" : ""}
        // wrapperCol={{ span: 24 }}
        initialValues={{ ...initialValues, id }}
        onValuesChange={handleFormChange}
        form={form}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item<FormParentType> hidden label="Id" name="id">
          <Input type="hidden" />
        </Form.Item>

        <br />
        <br />
        <Row gutter={24}>
          <Col span={10}>
            <Typography.Title className="textCapitalize" level={5}>
              Child Talent / Interest
            </Typography.Title>

            <br />
            <br />

            <Form.Item<FormChildInterest> label="Arts" name={`arts`}>
              <Input />
            </Form.Item>

            <Form.Item<FormChildInterest> label="music" name={`music`}>
              <Input />
            </Form.Item>

            <Form.Item<FormChildInterest> label="cognitive" name={`cognitive`}>
              <Input />
            </Form.Item>

            <Form.Item<FormChildInterest> label="sport" name={`sport`}>
              <Input />
            </Form.Item>

            <Form.Item<FormChildInterest>
              label="organization"
              name={`organization`}
            >
              <Input />
            </Form.Item>

            <Form.Item<FormChildInterest> label="others" name={`others`}>
              <Input.TextArea />
            </Form.Item>
          </Col>
          <Col span={2}></Col>
          <Col span={10}>
            <Typography.Title className="textCapitalize" level={5}>
              Child Background Education
            </Typography.Title>

            <br />
            <br />

            <Form.Item<FormChildInterest>
              label="Preschool Name"
              name={`preschoolName`}
            >
              <Input />
            </Form.Item>

            <Form.Item<FormChildInterest> label="Year" name={`preschoolyear`}>
              <Input />
            </Form.Item>

            <Form.Item<FormChildInterest>
              label="Address"
              name={`preschoolAddress`}
            >
              <Input.TextArea />
            </Form.Item>

            <Divider />

            <Form.Item<FormChildInterest>
              label="primary School Name"
              name={`primaryName`}
            >
              <Input />
            </Form.Item>

            <Form.Item<FormChildInterest> label="Year" name={`primaryyear`}>
              <Input />
            </Form.Item>

            <Form.Item<FormChildInterest>
              label="Address"
              name={`primaryAddress`}
            >
              <Input.TextArea />
            </Form.Item>

            <Divider />

            <Form.Item<FormChildInterest>
              label="others School Name"
              name={`othersName`}
            >
              <Input />
            </Form.Item>

            <Form.Item<FormChildInterest> label="Year" name={`othersyear`}>
              <Input />
            </Form.Item>

            <Form.Item<FormChildInterest>
              label="Address"
              name={`othersAddress`}
            >
              <Input.TextArea />
            </Form.Item>
          </Col>
        </Row>
        <br />

        <br />
        <Row gutter={24}>
          <Col span={10}></Col>
          <Col span={2}></Col>

          <Col span={10}></Col>
        </Row>
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

export default FormTalent;
