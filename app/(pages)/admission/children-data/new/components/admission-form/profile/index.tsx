"use client";

import { LoadingModule } from "@/c";
import {
  notifStoreError,
  notifUpdateError,
  studentTransportationOptions,
} from "@/consts";
import { useAntdContext } from "@/contexts";
import {
  dMY,
  dMYtoDayJs,
  fieldRules,
  today,
  uploadFileClient,
} from "@/libs/helpers";
import { CheckOutlined } from "@ant-design/icons";
import { faker } from "@faker-js/faker";
import type { UploadFile } from "antd";
import { Button, Col, Form, Input, Row, Select, Typography } from "antd";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import NonFormalEducation from "./NonFormalEducation";
import General from "./general";
import Parent from "./parent";
import Personal from "./personal";
import Talent from "./talent";
import { storeLocalStorage } from "@/pages/admission/helper";
import { FormChild } from "@/pages/admission/forms/type";

const storageName = "studentRegistration1";

const initialValues2: FormChild = {
  nationality: "indonesian",
  regisDate: today(),
  unit: "Preschool",
  status: "new",

  specialNeeds: "specialNeeds",

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

  nonFormalEducation: [],

  previousSchoolName: "string",
  previousSchoolType: "string",
  previousSchoolYear: "string",
  previousSchoolAddress: "string",
  previousSchoolCity: "string",
  previousSchoolRemarks: "string",

  fatherRelationshipWithChild: "Biological",
  motherRelationshipWithChild: "Biological",
  // photo: "new",
  fullName: faker.person.fullName(),
  placeOfBirth: "Medan",
  dob: today(),
  gender: "Male",
  religion: "Kristen",
  houseAddress: faker.location.streetAddress(),
  distance: "10",
  languages: "lang 1,lang 2, lang 3",
  city: "city",
  birthOrder: "1",
  totalChild: "2",
  goingToShoolBy: "Private Vehicle",

  arts: "string",
  music: "string",
  cognitive: "string",
  sport: "string",
  organization: "string",
  others: "string",
};

const initialValues = {};

interface Props {
  nextStep: () => void;
}

function FormStudent({ nextStep }: Props) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const { api } = useAntdContext();
  const { id } = useParams();
  const [loadingEdit, setLoadingEdit] = useState(false);
  const [filePhoto, setFilePhoto] = useState<UploadFile[]>([]);
  const [familyCard, setFamilyCard] = useState<UploadFile[]>([]);
  const [idCardFather, setIdCardFather] = useState<UploadFile[]>([]);
  const [idCardMother, setIdCardMother] = useState<UploadFile[]>([]);
  const [birthCertificate, setBirthCertificate] = useState<UploadFile[]>([]);
  const [immunizationCertificate, setImmunizationCertificate] = useState<
    UploadFile[]
  >([]);

  const handleFormChange = (changedValues: any, allValues: any) => {
    storeLocalStorage(storageName, allValues);
  };

  const propsDocuments = {
    setFilePhoto,
    filePhoto,
    familyCard,
    idCardFather,
    idCardMother,
    setFamilyCard,
    setIdCardFather,
    setIdCardMother,
    birthCertificate,
    setBirthCertificate,
    immunizationCertificate,
    setImmunizationCertificate,
  };

  const onFinish = async (values: FormChild) => {
    const isEdit = values.id;
    try {
      const docs = {
        photo: await uploadFileClient(filePhoto),
        photo_: JSON.stringify(values?.photo),
        familyCard: await uploadFileClient(familyCard),
        familyCard_: JSON.stringify(values?.familyCard),
        idCardFather: await uploadFileClient(idCardFather),
        idCardFather_: JSON.stringify(values?.idCardFather),
        idCardMother: await uploadFileClient(idCardMother),
        idCardMother_: JSON.stringify(values?.idCardMother),

        birthCertificate: await uploadFileClient(birthCertificate),
        birthCertificate_: JSON.stringify(values?.birthCertificate),

        immunizationCertificate: await uploadFileClient(
          immunizationCertificate,
        ),
        immunizationCertificate_: JSON.stringify(
          values?.immunizationCertificate,
        ),
      };

      storeLocalStorage(storageName, {
        ...values,
        ...docs,
        dob: dMY(values.dob),
        regisDate: dMY(values.regisDate),
      });

      nextStep();
    } catch (e: any) {
      const msg = String(e.message);
      api?.error(isEdit ? notifUpdateError(msg) : notifStoreError(msg));
    } finally {
      setLoading(false);
    }
  };

  const fetchDataEdit = async () => {
    //  setLoadingEdit(true);
    //  const dataEdit = await show(Number(id));
    //  if (dataEdit) {
    //    form.setFieldsValue(
    //      prismaToForm({ ...dataEdit, photo: [], oldPhoto: dataEdit.photo }),
    //    );
    //  }
    //  setLoadingEdit(false);
  };

  const fetchDefault = () => {
    const stored = localStorage.getItem(storageName);
    if (stored) {
      const json = JSON.parse(stored);

      console.log(json);
      form.setFieldsValue({
        ...json,
        regisDate: dMYtoDayJs(json.regisDate),
        dob: dMYtoDayJs(json.dob),
        photo: json.photo ? JSON.parse(json.photo_) : [],
        familyCard: json.familyCard ? JSON.parse(json.familyCard_) : [],
        idCardFather: json.idCardFather ? JSON.parse(json.idCardFather_) : [],
        idCardMother: json.idCardMother ? JSON.parse(json.idCardMother_) : [],
        birthCertificate: json.birthCertificate
          ? JSON.parse(json.birthCertificate_)
          : [],
        immunizationCertificate: json.immunizationCertificate
          ? JSON.parse(json.immunizationCertificate_)
          : [],
      });
    }
  };

  useEffect(() => {
    fetchDefault();

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
        initialValues={{ ...initialValues }}
        onValuesChange={handleFormChange}
        form={form}
        onFinish={onFinish}
        autoComplete="off"
      >
        <br />
        <Button onClick={() => form.setFieldsValue(initialValues2)}>
          Auto fill
        </Button>
        <br />

        <Form.Item<FormChild> hidden label="Id" name="id">
          <Input type="hidden" />
        </Form.Item>

        <Form.Item<FormChild> hidden label="" name="oldPhoto">
          <Input type="hidden" />
        </Form.Item>

        <br />
        <br />
        <General />
        <br />
        <br />
        <Personal />
        <br />
        <br />
        <Parent />
        <br />
        <br />
        <Talent />
        <br />
        <br />
        <br />
        <NonFormalEducation {...propsDocuments} />

        <br />
        {/* //* Other Information */}
        <Typography.Title level={5}>Other Information</Typography.Title>
        <br />
        <Row gutter={24}>
          <Col span={10}>
            <Form.Item<FormChild>
              label="Home distance to School"
              name="distance"
              rules={fieldRules(["required"])}
            >
              <Input placeholder="Km" />
            </Form.Item>
          </Col>
          <Col span={2}></Col>

          <Col span={10}>
            <Form.Item<FormChild>
              label="Going to School by"
              name="goingToShoolBy"
              rules={fieldRules(["required"])}
            >
              <Select options={studentTransportationOptions} />
            </Form.Item>
          </Col>
        </Row>
        <br />
        <Row gutter={24}>
          <Col span={21}>
            <Form.Item wrapperCol={{ offset: 4 }}>
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

export default FormStudent;
