"use client";

import { LoadingModule } from "@/c";
import { notifStoreError, notifUpdateError } from "@/consts";
import { useAntdContext } from "@/contexts";
import { prismaToForm, today } from "@/libs/helpers";
import { VoidMethod } from "@/types";
import { CheckOutlined } from "@ant-design/icons";
import { faker } from "@faker-js/faker";
import { Button, Col, Form, Input, Row } from "antd";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { show } from "../../action";
import type { FormParentType } from "../../type";
import FormParent from "../form-parent";

const initialValues: Partial<FormParentType> = {
  nationality_father: "indonesian",
  nationality_mother: "indonesian",

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
  nextStep: VoidMethod;
  prevStep: VoidMethod;
}

function FormParents({ nextStep, prevStep }: Props) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const { api } = useAntdContext();
  const { id } = useParams();
  const [loadingEdit, setLoadingEdit] = useState(false);

  const handleFormChange = (changedValues: any, allValues: any) => {};

  const onFinish = async (values: FormParentType) => {
    const isEdit = values.id;
    try {
      // alert("submitted");
      // setLoading(true);
      //   // @ts-expect-error mgkin harus pake generic
      //   await store(await submitEmployeeData({ ...values, photo: fileList[0] }));
      //   api?.success(isEdit ? notifUpdateSuccess() : notifStoreSuccess());
      //   router.back();

      localStorage.setItem("studentRegistration2", JSON.stringify(values));
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
        {/* //* General Information */}
        <br />
        <Row gutter={24}>
          <FormParent type="father" />
          <Col span={2}></Col>
          <FormParent type="mother" />
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

export default FormParents;
