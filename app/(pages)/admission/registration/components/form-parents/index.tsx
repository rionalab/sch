"use client";

import { LoadingModule } from "@/c";
import { notifUpdateError, notifUpdateSuccess } from "@/consts";
import { useAntdContext } from "@/contexts";
import { dMY, dMYtoDayJs, prismaToForm, today } from "@/libs/helpers";
import { VoidMethod } from "@/types";
import { CheckOutlined } from "@ant-design/icons";
import { faker } from "@faker-js/faker";
import { Button, Col, Form, Input, Row, Typography } from "antd";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import type { FormParentType } from "../../type";
import FormParentGeneral from "./general";
import FormParentProfile from "./profile";
import FormParentAddress from "./address";
import FormParentOthers from "./others";
import { newParentData, update } from "@/pages/admission/parent-data/action";

const initialValues: Partial<FormParentType> = {};
const initialValues2: Partial<FormParentType> = {
  nationality_father: "indonesian",
  nationality_mother: "indonesian",
  address_mother_same_as_father: true,
  fullName_father: faker.person.fullName(),
  fullName_mother: faker.person.fullName(),
  placeOfBirth_father: "Medan",
  placeOfBirth_mother: "Medan",
  dob_father: today(),
  dob_mother: today(),
  religion_father: "Kristen",
  religion_mother: "Kristen",
  address_mother: faker.location.streetAddress(),
  address_father: faker.location.streetAddress(),
  maritalStatus_father: "Single",
  maritalStatus_mother: "Single",
  email_father: faker.internet.email(),
  email_mother: faker.internet.email(),
  phoneNumber_mother: "089677356148",
  phoneNumber_father: String(faker.phone.number()),
  city_father: "string",
  lastEducation_father: "string",
  universityName_father: "string",
  postalCode_father: "string",
  city_mother: "string",
  lastEducation_mother: "string",
  universityName_mother: "string",
  postalCode_mother: "string",
  relationWithChild_father: "Biological",
  relationWithChild_mother: "Biological",
  theChildLivesWith_father: "string",
  theChildLivesWith_mother: "string",
  officeAddress_father: "string",
  officeAddress_mother: "string",
  idType_father: "string",
  idType_mother: "string",
  idNumber_father: "string",
  idNumber_mother: "string",
  nameInstitution_father: "string",
  nameInstitution_mother: "string",
  occupationPosition_father: "string",
  occupationPosition_mother: "string",
};

interface Props {
  nextStep?: VoidMethod;
  prevStep?: VoidMethod;
  defaultData?: any;
  setCounter?: any;
  counter: any;
  setEdit?: any;
}

function FormParents({
  defaultData,
  counter,
  setEdit,
  setCounter,
  nextStep,
  prevStep,
}: Props) {
  const isStepForm = nextStep && prevStep;
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const { api } = useAntdContext();
  const { id } = useParams();
  const [loadingEdit, setLoadingEdit] = useState(false);
  const [subtitle, setSubtitle] = useState("");
  const [loadingForm, setLoadingForm] = useState(false);
  const router = useRouter();
  const handleFormChange = (changedValues: any, allValues: any) => {};

  const onFinish = async (values: FormParentType) => {
    try {
      setLoadingForm(true);

      const finalValues = {
        ...values,
        //@ts-ignore
        dob_father: dMY(values.dateOfBirth_father),
        //@ts-ignore
        dob_mother: dMY(values.dateOfBirth_mother),
      };

      if (defaultData) {
        await update(defaultData.id, JSON.stringify(finalValues));
        api?.success(notifUpdateSuccess());
      } else {
        const parentId = localStorage.getItem("auth");
        await newParentData(Number(parentId), JSON.stringify(finalValues));
        api?.success(notifUpdateSuccess());
      }

      setEdit(false);
    } catch (e: any) {
      const msg = String(e.message);
      console.error(msg);
      api?.error(notifUpdateError(msg));
    } finally {
      setLoadingForm(false);
      setLoading(false);
      setCounter(counter + 1);
    }
  };

  useEffect(() => {
    if (defaultData) {
      const x = JSON.parse(defaultData.data);
      if (x) {
        const fieldsValue = {
          ...x,
          dob_father: dMYtoDayJs(x.dob_father),
          dob_mother: dMYtoDayJs(x.dob_mother),
        };

        form.setFieldsValue(fieldsValue);
      }
    }
  }, []);

  return (
    <div>
      {loadingEdit && <LoadingModule />}

      {!isStepForm && (
        <>
          <h3>Parent Profile</h3>
          <h4>{subtitle}</h4>
        </>
      )}

      <Button
        onClick={() => {
          form.setFieldsValue({
            ...initialValues2,
          });
        }}
        size="small"
        htmlType="button"
      >
        Auto fill (demo only)
      </Button>

      <Form
        name="basic"
        labelCol={{ span: 8 }}
        labelWrap
        className={loadingEdit ? "dNone" : ""}
        // initialValues={{ ...initialValues, id }}
        onValuesChange={handleFormChange}
        form={form}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item<FormParentType> hidden label="Id" name="id">
          <Input type="hidden" />
        </Form.Item>

        <br />
        <Row gutter={24}>
          <FormParentGeneral />
          <br />
          <br />
          <br />

          <FormParentProfile />
          <br />
          <br />
          <br />

          <FormParentAddress />
          <br />
          <br />
          <br />

          <FormParentOthers />
          <br />
          <br />
          <br />
        </Row>
        <br />

        <br />

        <Row gutter={24}>
          <Col span={21}>
            <Form.Item wrapperCol={{ offset: 4 }}>
              {defaultData && (
                <Button
                  onClick={() => {
                    if (setEdit) {
                      setEdit(false);
                    } else {
                      router.back();
                    }
                  }}
                  style={{ marginRight: 8 }}
                  disabled={loading}
                  htmlType="button"
                >
                  Cancel
                </Button>
              )}

              <Button
                icon={<CheckOutlined />}
                disabled={loading || loadingForm}
                type="primary"
                style={{ paddingLeft: 50, paddingRight: 50 }}
                htmlType="submit"
              >
                {loadingForm ? "Saving..." : "Save"}
              </Button>
            </Form.Item>
          </Col>
          <Col></Col>
        </Row>
      </Form>
    </div>
  );
}

export default FormParents;
