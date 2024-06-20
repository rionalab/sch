"use client";

import { LoadingModule } from "@/c";
import { notifStoreError, notifUpdateError, urls } from "@/consts";
import { useAntdContext } from "@/contexts";
import { prismaToForm } from "@/libs/helpers";
import { VoidMethod } from "@/types";
import { CheckOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Typography } from "antd";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { allowRegister, show, store } from "../../action";
import type { FormOthers, FormParentType } from "../../type";
import FieldActivities from "../field-activities";
import FieldPersonLives from "../field-person-lives";

const initialValues: Partial<FormOthers> = {
  schoolInformation: "string",
  declaration: "string",

  typeActivities1: "string",
  locationActivities1: "string",
  timeActivities1: "string",
  startEndActivities1: "string",

  typeActivities2: "string",
  locationActivities2: "string",
  timeActivities2: "string",
  startEndActivities2: "string",

  typeActivities3: "string",
  locationActivities3: "string",
  timeActivities3: "string",
  startEndActivities3: "string",

  personLiveWithName1: "string",
  personLiveWithRelation1: "string",
  personLiveWithAddress1: "string",
  personLiveWithPhone1: "string",
  personLiveWithEmail1: "string",

  personLiveWithName2: "string",
  personLiveWithRelation2: "string",
  personLiveWithAddress2: "string",
  personLiveWithPhone2: "string",
  personLiveWithEmail2: "string",

  personLiveWithName3: "string",
  personLiveWithRelation3: "string",
  personLiveWithAddress3: "string",
  personLiveWithPhone3: "string",
  personLiveWithEmail3: "string",
};

interface Props {
  prevStep: VoidMethod;
}

function FormInformation({ prevStep }: Props) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const { api } = useAntdContext();
  const router = useRouter();
  const { id } = useParams();
  const [loadingEdit, setLoadingEdit] = useState(false);
  const handleFormChange = (changedValues: any, allValues: any) => {};
  const [userId, setuserId] = useState(0);

  const onFinish = async (values: FormParentType) => {
    const isEdit = values.id;
    try {
      setLoading(true);

      const data1 = localStorage.getItem("studentRegistration1");
      const data2 = localStorage.getItem("studentRegistration2");
      const data3 = localStorage.getItem("studentRegistration3");
      const data4 = JSON.stringify(values);

      await store({ data1, data2, data3, data4, userId });
      await allowRegister(userId, false);

      router.push(urls.admission.registrationSuccess);
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

    const localStorageUserId = localStorage.getItem("auth");
    setuserId(Number(localStorageUserId));
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
              Child Non Formal Education/ Extraculiculer
            </Typography.Title>

            <br />
            {Array.from({ length: 3 }).map((row, i) => {
              return <FieldActivities index={i + 1} key={i} />;
            })}
          </Col>
          <Col span={2}></Col>
          <Col span={10}>
            <Typography.Title className="textCapitalize" level={5}>
              Person(s) Live with the Child
            </Typography.Title>

            <br />

            {Array.from({ length: 3 }).map((row, i) => {
              return <FieldPersonLives index={i + 1} key={i} />;
            })}
          </Col>
        </Row>
        <br />

        <br />
        <Row gutter={24}>
          <Col span={24}>
            <Typography.Title className="textCapitalize" level={5}>
              School Information
            </Typography.Title>

            <p style={{ marginTop: -4 }}>
              Please let us know how you know Kids Republic School
            </p>

            <Form.Item<FormOthers> name={`schoolInformation`}>
              <Input.TextArea />
            </Form.Item>

            <Typography.Title className="textCapitalize" level={5}>
              Declaration
            </Typography.Title>

            <p style={{ marginTop: -4 }}>
              The details in this form are the best of my knowledge true and
              correct and i will keep the school informed of any changes.
            </p>
            <Form.Item<FormOthers> name={`declaration`}>
              <Input.TextArea />
            </Form.Item>
          </Col>
        </Row>

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
                {loading ? "Saving..." : "Save"}
              </Button>
            </Form.Item>
          </Col>
          <Col></Col>
        </Row>
      </Form>
    </div>
  );
}

export default FormInformation;
