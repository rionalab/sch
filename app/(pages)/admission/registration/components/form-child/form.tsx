"use client";

import { FieldUpload, LoadingModule } from "@/c";
import {
  employeeUnitOptions,
  genderOptions,
  notifStoreError,
  notifUpdateError,
  religionOptions,
  studentTransportationOptions,
} from "@/consts";
import { useAntdContext } from "@/contexts";
import {
  fieldRules,
  prismaToForm,
  today,
  uploadFileClient,
} from "@/libs/helpers";
import { CheckOutlined } from "@ant-design/icons";
import { faker } from "@faker-js/faker";
import type { UploadFile } from "antd";
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
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { show } from "../../action";
import { type FormChild, type RegStatus } from "../../type";

const initialValues: FormChild = {
  nationality: "indonesian",

  regisDate: today(),
  unit: "Preschool",

  status: "new",
  // photo: "new",

  fullName: faker.person.fullName(),
  placeOfBirth: "Medan",
  dob: today(),
  gender: "Male",
  religion: "Kristen",
  houseAddress: faker.location.streetAddress(),
  distance: "10",
  languages: "aa, bb, cc",
  city: "string",
  birthOrder: "1",
  totalChild: "2",
  goingToShoolBy: "Private Vehicle",
};

interface Props {
  nextStep: () => void;
}

function FormStudent({ nextStep }: Props) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const { api } = useAntdContext();
  const { id } = useParams();
  const [loadingEdit, setLoadingEdit] = useState(false);
  const [showTransferFields, setShowTransferFields] = useState(false);
  const [filePhoto, setFilePhoto] = useState<UploadFile[]>([]);
  const [familyCard, setFamilyCard] = useState<UploadFile[]>([]);
  const [idCardFather, setIdCardFather] = useState<UploadFile[]>([]);
  const [idCardMother, setIdCardMother] = useState<UploadFile[]>([]);
  const handleFormChange = (changedValues: any, allValues: any) => {};

  const onFinish = async (values: FormChild) => {
    const isEdit = values.id;
    try {
      const docs = {
        photo: await uploadFileClient(filePhoto),
        familyCard: await uploadFileClient(familyCard),
        idCardFather: await uploadFileClient(idCardFather),
        idCardMother: await uploadFileClient(idCardMother),
      };

      console.log(docs);

      localStorage.setItem(
        "studentRegistration1",
        JSON.stringify({
          ...values,
          ...docs,
        }),
      );
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

  const onStatusChange = (v: RegStatus) => {
    setShowTransferFields(v === "transfer");
  };

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
        <Form.Item<FormChild> hidden label="Id" name="id">
          <Input type="hidden" />
        </Form.Item>

        <Form.Item<FormChild> hidden label="" name="oldPhoto">
          <Input type="hidden" />
        </Form.Item>

        <br />
        <Typography.Title level={5}>General Information</Typography.Title>
        <br />
        <Row gutter={24}>
          <Col span={10}>
            <Form.Item<FormChild>
              label="Regis. Date"
              name="regisDate"
              rules={fieldRules(["required"])}
            >
              <DatePicker />
            </Form.Item>
            <Form.Item<FormChild> label="Unit" name="unit">
              <Select options={employeeUnitOptions} />
            </Form.Item>
          </Col>
          <Col span={2}></Col>
          <Col span={10}>
            <Form.Item<FormChild> label="Status" name="status">
              <Select
                onChange={onStatusChange}
                options={[
                  {
                    label: "New",
                    value: "new",
                  },
                  {
                    label: "Transfer",
                    value: "transfer",
                  },
                ]}
              />
            </Form.Item>

            {showTransferFields && (
              <>
                <Form.Item<FormChild>
                  label="NISN"
                  name="nisn"
                  rules={fieldRules(["required"])}
                >
                  <Input />
                </Form.Item>

                <Form.Item<FormChild> label="Old Sch Name" name="oldSchoolName">
                  <Input />
                </Form.Item>

                <Form.Item<FormChild>
                  label="Old Sch Address"
                  name="oldSchoolAddress"
                >
                  <Input.TextArea />
                </Form.Item>
              </>
            )}
          </Col>
        </Row>
        <br />
        {/* //* Personal Information */}
        <Typography.Title level={5}>Personal Information</Typography.Title>
        <br />
        <Row gutter={24}>
          <Col span={10}>
            <Form.Item<FormChild>
              label="Full Name"
              name="fullName"
              rules={fieldRules(["required"])}
            >
              <Input />
            </Form.Item>

            <Form.Item<FormChild>
              label="Place of Birth"
              name="placeOfBirth"
              rules={fieldRules(["required"])}
            >
              <Input />
            </Form.Item>
            <Form.Item<FormChild>
              label="Gender"
              name="gender"
              rules={fieldRules(["required"])}
            >
              <Select options={genderOptions} />
            </Form.Item>
            <Form.Item<FormChild>
              label="Religion"
              name="religion"
              rules={fieldRules(["required"])}
            >
              <Select options={religionOptions} />
            </Form.Item>
            <Form.Item<FormChild>
              label="Home Address"
              name="houseAddress"
              rules={fieldRules(["required"])}
            >
              <Input.TextArea />
            </Form.Item>

            <Form.Item<FormChild>
              label="City"
              name="city"
              rules={fieldRules(["required"])}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={2}></Col>

          <Col span={10}>
            <Form.Item<FormChild> label="Nationality" name="nationality">
              <Select
                options={[
                  {
                    label: "Indonesian",
                    value: "indonesian",
                  },
                  {
                    label: "Other",
                    value: "other",
                  },
                ]}
              />
            </Form.Item>

            <Form.Item<FormChild>
              label="Date of Birth"
              name="dob"
              rules={fieldRules(["required"])}
            >
              <DatePicker />
            </Form.Item>

            <Form.Item<FormChild>
              label="Birth Order"
              wrapperCol={{ span: 6 }}
              rules={fieldRules(["required"])}
              name="birthOrder"
            >
              <InputNumber />
            </Form.Item>

            <Form.Item<FormChild>
              label="Total Children in Family"
              wrapperCol={{ span: 6 }}
              rules={fieldRules(["required"])}
              name="totalChild"
            >
              <InputNumber />
            </Form.Item>

            <Form.Item<FormChild>
              label="Spoken Langs."
              name="languages"
              rules={fieldRules(["required"])}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <br />
        {/* //* Documents Information */}
        <Typography.Title level={5}>Documents</Typography.Title>
        <br />
        <Row gutter={24}>
          <Col span={10}>
            <FieldUpload<FormChild>
              fileList={filePhoto}
              setFileList={setFilePhoto}
              label={"photo"}
              type="image"
              name="photo"
            />
            <FieldUpload<FormChild>
              fileList={familyCard}
              setFileList={setFamilyCard}
              label={"Family Card"}
              type="image"
              name="familyCard"
            />
          </Col>
          <Col span={2}></Col>
          <Col span={10}>
            <FieldUpload<FormChild>
              fileList={idCardFather}
              setFileList={setIdCardFather}
              label={"Id Card Father"}
              type="image"
              name="idCardFather"
            />
            <FieldUpload<FormChild>
              fileList={idCardMother}
              setFileList={setIdCardMother}
              label={"Id Card Mother"}
              type="image"
              name="idCardMother"
            />
          </Col>
        </Row>

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
