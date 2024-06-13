"use client";

import { LoadingModule } from "@/c";
import {
  notifStoreError,
  notifStoreSuccess,
  notifUpdateError,
  notifUpdateSuccess,
} from "@/consts";
import { useAntdContext } from "@/contexts";
import { dMY, dMYtoDayJs, prismaToForm, today } from "@/libs/helpers";
import { VoidMethod } from "@/types";
import { CheckOutlined } from "@ant-design/icons";
import { faker } from "@faker-js/faker";
import { Button, Col, Form, Input, Row } from "antd";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { show, showParentData, storeParentData } from "../../action";
import type { FormParentType } from "../../type";
import FormParent from "../form-parent";

const initialValues: Partial<FormParentType> = {};
const initialValues2: Partial<FormParentType> = {
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
  nextStep?: VoidMethod;
  prevStep?: VoidMethod;
}

function FormParents({ nextStep, prevStep }: Props) {
  const isStepForm = nextStep && prevStep;
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const { api } = useAntdContext();
  const { id } = useParams();
  const [loadingEdit, setLoadingEdit] = useState(false);
  const [subtitle, setSubtitle] = useState("");

  const handleFormChange = (changedValues: any, allValues: any) => {};

  const onFinish = async (values: FormParentType) => {
    const isEdit = values.id;
    try {
      if (isStepForm) {
        localStorage.setItem("studentRegistration2", JSON.stringify(values));
        nextStep();
      } else {
        const dataFinal = {
          ...values,
          dob_father: dMY(values.dob_father),
          dob_mother: dMY(values.dob_mother),
        };

        console.log(222, dataFinal);
        const parentId = localStorage.getItem("auth");
        const store = await storeParentData(
          Number(parentId),
          JSON.stringify(dataFinal),
          2,
        );

        api?.success(isEdit ? notifUpdateSuccess() : notifStoreSuccess());
      }
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

  const checkDataExist = async (id: any) => {
    const x = await showParentData(Number(id));

    if (x) {
      setSubtitle("Make sure to make parent's data keep updated");

      const obj = JSON.parse(x.data);

      obj.dob_father = dMYtoDayJs(obj.dob_father);
      obj.dob_mother = dMYtoDayJs(obj.dob_mother);

      form.setFieldsValue(obj);
    } else {
      setSubtitle("Please complete the parent data before continue.  ");
    }
  };

  useEffect(() => {
    const id = localStorage.getItem("auth");
    checkDataExist(id);
  }, []);

  return (
    <div>
      {loadingEdit && <LoadingModule />}

      {!isStepForm && (
        <>
          <h3>Parent Registration</h3>
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
        <Row gutter={24}>
          <Col span={21}>
            <Form.Item wrapperCol={{ offset: 4 }}>
              {isStepForm && (
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
              )}

              <Button
                icon={<CheckOutlined />}
                disabled={loading}
                type="primary"
                style={{ paddingLeft: 50, paddingRight: 50 }}
                htmlType="submit"
              >
                {isStepForm ? "Next" : "Save"}
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
