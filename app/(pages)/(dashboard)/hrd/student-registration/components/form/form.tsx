// @ts-nocheck

"use client";

import { imageUploadType } from "@/app/_consts/file";
import { ButtonBack, ButtonForm, LoadingModule } from "@/c";
import {
  bloodTypeOptions,
  contractStatusOption,
  degreeOptions,
  employeeUnitOptions,
  genderOptions,
  maritalStatusOptions,
  notifStoreError,
  notifStoreSuccess,
  notifUpdateError,
  notifUpdateSuccess,
  religionOptions,
} from "@/consts";
import { useAntdContext } from "@/contexts";
import {
  fieldRules,
  prismaToForm,
  selectOptions,
  today,
  tomorrow,
} from "@/libs/helpers";
import type { Position } from "@/pages/(dashboard)/master/position/type";
import { UploadOutlined } from "@ant-design/icons";
import { faker } from "@faker-js/faker";
import type { UploadFile } from "antd";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
  Typography,
  Upload,
  message,
} from "antd";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { show, store } from "../../action";
import { type Employee, type FormFields } from "../../type";
import { submitEmployeeData } from "./model";

const initialValues: Partial<Employee> = {
  NIP: "00001",
  positionId: 2,
  hireDate: today(),
  contractStatus: "Active",
  unit: "Preschool",
  TMT: today(),
  PKWT: [today(), tomorrow()],

  fullName: faker.person.fullName(),
  NIK: "1371121301920002",
  placeOfBirth: "Medan",
  dob: today(),
  gender: "Male",
  bloodType: "O",
  religion: "Kristen",
  tribe: "Batak",
  idAddress: faker.location.streetAddress(),
  houseAddress: faker.location.streetAddress(),
  maritalStatus: "Single",
  // photo: "",

  email: faker.internet.email(),
  phone1: "089677356148",
  phone2: String(faker.phone.number()),
  familyPhone: String(faker.phone.number()),

  degree: "S1",
  institution: faker.company.name(),
  major: "English Literature",

  fatherName: faker.person.fullName(),
  motherName: faker.person.fullName(),
  siblingName: faker.person.fullName(),
  spouseName: faker.person.fullName(),
  childrenName: "Andi, Budi, Cicil",

  remarks: faker.lorem.words(10),
};

interface Props {
  positions: Position[];
}

function FormEmployee(props: Props) {
  const { positions } = props;
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const { api } = useAntdContext();
  const { id } = useParams();
  const router = useRouter();
  const [loadingEdit, setLoadingEdit] = useState(false);
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleFormChange = (changedValues: any, allValues: any) => {};

  const onFinish = async (values: FormFields) => {
    const isEdit = values.id;

    try {
      setLoading(true);
      // @ts-expect-error mgkin harus pake generic
      await store(await submitEmployeeData({ ...values, photo: fileList[0] }));
      api?.success(isEdit ? notifUpdateSuccess() : notifStoreSuccess());
      router.back();
    } catch (e: any) {
      const msg = String(e.message);
      api?.error(isEdit ? notifUpdateError(msg) : notifStoreError(msg));
    } finally {
      setLoading(false);
    }
  };

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
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
      <ButtonBack />
      {loadingEdit && <LoadingModule />}
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        className={loadingEdit ? "dNone" : ""}
        wrapperCol={{ span: 16 }}
        initialValues={{ ...initialValues, id }}
        onValuesChange={handleFormChange}
        form={form}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item<FormFields> hidden label="Id" name="id">
          <Input type="hidden" />
        </Form.Item>

        <Form.Item<FormFields> hidden label="" name="oldPhoto">
          <Input type="hidden" />
        </Form.Item>

        <br />
        {/* //* Employee Information */}
        <Typography.Title level={5}>Employee Information</Typography.Title>
        <br />
        <Row gutter={24}>
          <Col offset={1} span={10}>
            <Form.Item<FormFields>
              label="NIP"
              name="NIP"
              rules={fieldRules(["required"])}
            >
              <Input />
            </Form.Item>
            <Form.Item<FormFields>
              label="Hire Date"
              name="hireDate"
              rules={fieldRules(["required"])}
            >
              <DatePicker />
            </Form.Item>
            <Form.Item<FormFields> label="Unit" name="unit">
              <Select options={employeeUnitOptions} />
            </Form.Item>
            <Form.Item<FormFields>
              label="PKWT"
              name="PKWT"
              // rules={fieldRules(["required"])}
            >
              <DatePicker.RangePicker />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item<FormFields>
              label="Position"
              name="positionId"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Select
                options={selectOptions<Position>(positions, "name", "id")}
              />
            </Form.Item>
            <Form.Item<FormFields>
              label="Status"
              name="contractStatus"
              rules={fieldRules(["required"])}
            >
              <Select options={contractStatusOption} />
            </Form.Item>
            <Form.Item<FormFields> label="TMT" name="TMT">
              <DatePicker />
            </Form.Item>
          </Col>
        </Row>
        <br />
        {/* //* Personal Information */}
        <Typography.Title level={5}>Personal Information</Typography.Title>
        <br />
        <Row gutter={24}>
          <Col offset={1} span={10}>
            <Form.Item<FormFields>
              label="Full Name"
              name="fullName"
              rules={fieldRules(["required"])}
            >
              <Input />
            </Form.Item>

            <Form.Item<FormFields>
              label="Place of Birth"
              name="placeOfBirth"
              rules={fieldRules(["required"])}
            >
              <Input />
            </Form.Item>
            <Form.Item<FormFields>
              label="Gender"
              name="gender"
              rules={fieldRules(["required"])}
            >
              <Select options={genderOptions} />
            </Form.Item>
            <Form.Item<FormFields>
              label="Religion"
              name="religion"
              rules={fieldRules(["required"])}
            >
              <Select options={religionOptions} />
            </Form.Item>
            <Form.Item<FormFields>
              label="Photo"
              name="photo"
              valuePropName="fileList"
              getValueFromEvent={normFile}
            >
              <Upload
                fileList={fileList}
                accept={"image/png, image/jpeg, image/jpg"}
                onRemove={(file) => {
                  const index = fileList.indexOf(file);
                  const newFileList = fileList.slice();
                  newFileList.splice(index, 1);
                  setFileList(newFileList);
                }}
                beforeUpload={(file) => {
                  const isImage = imageUploadType.includes(file.type);
                  const isLt2M = file.size / 1024 / 1024 < 2;

                  if (!isImage) {
                    void message.error(`${file.name} is not an image file`);
                    setFileList([]);
                  }

                  if (!isLt2M) {
                    void message.error("Image must smaller than 2MB!");
                    setFileList([]);
                  }

                  setFileList([...fileList, file]);

                  return false;
                  // return isImage || Upload.LIST_IGNORE;
                }}
                maxCount={1}
                name="logo"
                listType="picture"
              >
                <Button icon={<UploadOutlined />}>Click to upload</Button>
              </Upload>
            </Form.Item>
            <Form.Item<FormFields>
              label="ID Address"
              name="idAddress"
              rules={fieldRules(["required"])}
            >
              <Input.TextArea />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item<FormFields>
              label="NIK"
              name="NIK"
              rules={fieldRules(["required"])}
            >
              <Input />
            </Form.Item>

            <Form.Item<FormFields>
              label="Date of Birth"
              name="dob"
              rules={fieldRules(["required"])}
            >
              <DatePicker />
            </Form.Item>
            <Form.Item<FormFields>
              label="Blood Type"
              wrapperCol={{ span: 6 }}
              name="bloodType"
            >
              <Select options={bloodTypeOptions} />
            </Form.Item>
            <Form.Item<FormFields> label="Tribe" name="tribe">
              <Input />
            </Form.Item>
            <Form.Item<FormFields>
              label="Marital Status"
              name="maritalStatus"
              rules={fieldRules(["required"])}
            >
              <Select options={maritalStatusOptions} />
            </Form.Item>
            <Form.Item<FormFields>
              label="House Address"
              name="houseAddress"
              rules={fieldRules(["required"])}
            >
              <Input.TextArea />
            </Form.Item>
          </Col>
        </Row>
        <br />
        {/* //* Education Information */}
        <Typography.Title level={5}>Education Information</Typography.Title>
        <br />
        <Row gutter={24}>
          <Col offset={1} span={10}>
            <Form.Item<FormFields>
              label="Institution"
              name="institution"
              rules={fieldRules(["required"])}
            >
              <Input />
            </Form.Item>
            <Form.Item<FormFields>
              label="Major"
              name="major"
              rules={fieldRules(["required"])}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item<FormFields>
              label="Degree"
              name="degree"
              rules={fieldRules(["required"])}
            >
              <Select options={degreeOptions} />
            </Form.Item>
          </Col>
        </Row>
        <br />
        {/* //* Contact Information */}
        <Typography.Title level={5}>Contact Information</Typography.Title>
        <br />
        <Row gutter={24}>
          <Col offset={1} span={10}>
            <Form.Item<FormFields>
              label="Phone 1"
              name="phone1"
              rules={fieldRules(["required"])}
            >
              <Input />
            </Form.Item>
            <Form.Item<FormFields>
              label="Email"
              name="email"
              rules={fieldRules(["required"])}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item<FormFields> label="Phone 2" name="phone2">
              <Input />
            </Form.Item>
            <Form.Item<FormFields> label="Family Contact" name="familyPhone">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <br />
        {/* //* Education Information */}
        <Typography.Title level={5}>Family Information</Typography.Title>
        <br />
        <Row gutter={24}>
          <Col offset={1} span={10}>
            <Form.Item<FormFields> label="Father Name" name="fatherName">
              <Input />
            </Form.Item>
            <Form.Item<FormFields> label="Mother Name" name="motherName">
              <Input />
            </Form.Item>
            <Form.Item<FormFields> label="Sibling Name" name="siblingName">
              <Input placeholder="Separated with comma" />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item<FormFields> label="Spouse Name" name="spouseName">
              <Input />
            </Form.Item>
            <Form.Item<FormFields> label="Children Name" name="childrenName">
              <Input placeholder="Separated with comma" />
            </Form.Item>
          </Col>
        </Row>
        <br />
        {/* //* Others Information */}
        <Typography.Title level={5}>Others Information</Typography.Title>
        <br />
        <Row gutter={24}>
          <Col offset={1} span={10}>
            <Form.Item<FormFields> label="Remarks" name="remarks">
              <Input.TextArea />
            </Form.Item>
          </Col>
          <Col span={10}></Col>
        </Row>

        <ButtonForm loading={loading} />
      </Form>
    </div>
  );
}

export default FormEmployee;
