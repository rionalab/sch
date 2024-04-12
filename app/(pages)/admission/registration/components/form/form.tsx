"use client";

import React, { useEffect, useState } from "react";
import {
  DatePicker,
  Col,
  Form,
  Input,
  Row,
  Typography,
  Select,
  Button,
  Upload,
  message,
} from "antd";
import { RegStatus, type Employee, type FormFields } from "../../type";
import {
  fieldRules,
  prismaToForm,
  selectOptions,
  today,
  tomorrow,
} from "@/libs/helpers";
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
  studentTransportationOptions,
} from "@/consts";
import { UploadOutlined } from "@ant-design/icons";
import { useParams, useRouter } from "next/navigation";
import { useAntdContext } from "@/contexts";
import { store, show } from "../../action";
import { faker } from "@faker-js/faker";
import { submitEmployeeData } from "./model";
import { ButtonForm, ButtonBack, LoadingModule } from "@/c";
import type { Position } from "@/pages/(dashboard)/master/position/type";
import { imageUploadType } from "@/app/_consts/file";
import type { UploadFile } from "antd";

const initialValues: Partial<Employee> = {
  status: "new",
  nationality: "indonesian",

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

const initialValues2 = {};
interface Props {
  positions: Position[];
}

function FormStudent(props: Props) {
  const { positions } = props;
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const { api } = useAntdContext();
  const { id } = useParams();
  const router = useRouter();
  const [loadingEdit, setLoadingEdit] = useState(false);
  const [showTransferFields, setShowTransferFields] = useState(false);
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

  const x = form.getFieldsValue();

  const onStatusChange = (v: RegStatus)=> {
    setShowTransferFields(v === "transfer");
  }

  return (
    <div>
      {loadingEdit && <LoadingModule />}
      <Form
        name="basic"
        labelCol={{ span: 8 }}    labelWrap
        className={loadingEdit ? "dNone" : ""}
        // wrapperCol={{ span: 24 }}
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
        {/* //* General Information */}
        <Typography.Title level={5}>General Information</Typography.Title>
        <br />
        <Row gutter={24}>
          <Col  span={10}>
           
            <Form.Item<FormFields>
              label="Regis. Date"
              name="hireDate"
              rules={fieldRules(["required"])}
            >
              <DatePicker />
            </Form.Item>
            <Form.Item<FormFields> label="Unit" name="unit">
              <Select options={employeeUnitOptions} />
            </Form.Item> 
          </Col>
          <Col span={2}></Col>
          <Col span={10}>
            <Form.Item<FormFields>
              label="Status"
              name="status"
            >
              <Select
                       onChange={onStatusChange}
                       options={[
                  {
                    label: "New", value: "new"
                  },
                  {
                    label: "Transfer", value: "transfer"
                  },
                ]}
              />
            </Form.Item>

            {
              showTransferFields && (
<>

                <Form.Item<FormFields>
                  label="NISN"
                  name="nisn"
                  rules={fieldRules(["required"])}
              >
                <Input />
              </Form.Item>

              <Form.Item<FormFields>
              label="Old Sch Name"
              name="oldSchoolName"
 
            >
              <Input />
            </Form.Item>


            <Form.Item<FormFields>
              label="Old Sch Address"
              name="oldSchoolAddress"
      
            >
              <Input.TextArea />
            </Form.Item>



                  </>


              )
            }

        


           
       
          </Col>
        </Row>
        <br />
        {/* //* Personal Information */}
        <Typography.Title level={5}>Personal Information</Typography.Title>
        <br />
        <Row gutter={24}>
          <Col span={10}>
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
          
          </Col>
          <Col span={2}></Col>

          <Col span={10}>
            
            <Form.Item<FormFields> label="Nationality" name="nationality">
              <Select options={[{
                label: "Indonesian", value: "indonesian"
              },
              {
                label: "Other", value: "other"
              }
              ]} />
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
              label="Spoken Langs."
              name="languages"
              rules={fieldRules(["required"])}
            >
              <Input />
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
        {/* //* Other Information */}
        <Typography.Title level={5}>Other Information</Typography.Title>
        <br />
        <Row gutter={24}>
          <Col span={10}>
            <Form.Item<FormFields>
              label="Home distance to School"
              name="distance"
              rules={fieldRules(["required"])}
            >
              <Input placeholder="Km" />
            </Form.Item>
          </Col>
          <Col span={2}></Col>

          <Col span={10}>
            <Form.Item<FormFields>
              label="Going to School by"
              name="goingToShoolBy"
              rules={fieldRules(["required"])}
            >
              <Select options={studentTransportationOptions} />
            </Form.Item>
          </Col>
        </Row>
        <br />
        

        <ButtonForm loading={loading} />
      </Form>
    </div>
  );
}

export default FormStudent;
