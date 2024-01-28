"use client";

import React, { useState } from "react";
import {
  Button,
  DatePicker,
  Col,
  Form,
  Input,
  Row,
  Typography,
  Select,
  Upload,
} from "antd";
import { FieldType } from "../type";
import { ButtonBack, ButtonForm } from "@/c";
import { fieldRules, selectOptions } from "@/libs/helpers";
import { Position } from "@/pages/master/position/type";
import {
  bloodTypeOptions,
  contractStatusOption,
  degreeOptions,
  employeeUnitOptions,
  genderOptions,
  maritalStatusOptions,
  religionOptions,
} from "@/consts";
import { UploadOutlined } from "@ant-design/icons";
import { useParams } from "next/navigation";
import { useAntdContext } from "@/contexts";

interface Props {
  positions: Position[];
}

function FormEmployee(props: Props) {
  const { positions } = props;
  const [loading, setLoading] = useState(false);
  const { api } = useAntdContext();
  const { id } = useParams();
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const normFile = (e: any) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <ButtonBack />
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <br />
        {/* //* Employee Information */}
        <Typography.Title level={5}>Employee Information</Typography.Title>
        <br />
        <Row gutter={24}>
          <Col offset={1} span={10}>
            <Form.Item<FieldType>
              label="NIP"
              name="NIP"
              rules={fieldRules(["required"])}
            >
              <Input />
            </Form.Item>
            <Form.Item<FieldType>
              label="Hire Date"
              name="hireDate"
              rules={fieldRules(["required"])}
            >
              <DatePicker />
            </Form.Item>
            <Form.Item<FieldType> label="Unit" name="unit">
              <Select options={employeeUnitOptions} />
            </Form.Item>
            <Form.Item<FieldType>
              label="PKWT"
              name="PKWTStart"
              // rules={fieldRules(["required"])}
            >
              <DatePicker.RangePicker />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item<FieldType>
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
            <Form.Item<FieldType>
              label="Status"
              name="contractStatus"
              rules={fieldRules(["required"])}
            >
              <Select options={contractStatusOption} />
            </Form.Item>
            <Form.Item<FieldType>
              label="TMT"
              name="TMT"
              rules={fieldRules(["required"])}
            >
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
            <Form.Item<FieldType>
              label="Full Name"
              name="fullName"
              rules={fieldRules(["required"])}
            >
              <Input />
            </Form.Item>

            <Form.Item<FieldType>
              label="Place of Birth"
              name="placeOfBirth"
              rules={fieldRules(["required"])}
            >
              <Input />
            </Form.Item>
            <Form.Item<FieldType>
              label="Gender"
              name="gender"
              rules={fieldRules(["required"])}
            >
              <Select options={genderOptions} />
            </Form.Item>
            <Form.Item<FieldType>
              label="Religion"
              name="religion"
              rules={fieldRules(["required"])}
            >
              <Select options={religionOptions} />
            </Form.Item>
            <Form.Item<FieldType>
              label="Photo"
              name="photo"
              valuePropName="fileList"
              getValueFromEvent={normFile}
            >
              <Upload name="logo" action="/upload.do" listType="picture">
                <Button icon={<UploadOutlined />}>Click to upload</Button>
              </Upload>
            </Form.Item>
            <Form.Item<FieldType>
              label="ID Address"
              name="idAddress"
              rules={fieldRules(["required"])}
            >
              <Input.TextArea />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item<FieldType>
              label="NIK"
              name="NIK"
              rules={fieldRules(["required"])}
            >
              <Input />
            </Form.Item>

            <Form.Item<FieldType>
              label="Date of Birth"
              name="dob"
              rules={fieldRules(["required"])}
            >
              <DatePicker />
            </Form.Item>
            <Form.Item<FieldType>
              label="Blood Type"
              wrapperCol={{ span: 6 }}
              name="bloodType"
            >
              <Select options={bloodTypeOptions} />
            </Form.Item>
            <Form.Item<FieldType> label="Tribe" name="tribe">
              <Input />
            </Form.Item>
            <Form.Item<FieldType>
              label="Marital Status"
              name="maritalStatus"
              rules={fieldRules(["required"])}
            >
              <Select options={maritalStatusOptions} />
            </Form.Item>
            <Form.Item<FieldType>
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
            <Form.Item<FieldType>
              label="Institution"
              name="institution"
              rules={fieldRules(["required"])}
            >
              <Input />
            </Form.Item>
            <Form.Item<FieldType>
              label="Major"
              name="major"
              rules={fieldRules(["required"])}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item<FieldType>
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
            <Form.Item<FieldType>
              label="Phone 1"
              name="phone1"
              rules={fieldRules(["required"])}
            >
              <Input />
            </Form.Item>
            <Form.Item<FieldType>
              label="Email"
              name="email"
              rules={fieldRules(["required"])}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item<FieldType> label="Phone 2" name="phone2">
              <Input />
            </Form.Item>
            <Form.Item<FieldType> label="Family Contact" name="familyPhone">
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
            <Form.Item<FieldType> label="Father Name" name="fatherName">
              <Input />
            </Form.Item>
            <Form.Item<FieldType> label="Mother Name" name="motherName">
              <Input />
            </Form.Item>
            <Form.Item<FieldType> label="Sibling Name" name="siblingName">
              <Input placeholder="Separated with comma" />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item<FieldType> label="Spouse Name" name="spouseName">
              <Input />
            </Form.Item>
            <Form.Item<FieldType> label="Children Name" name="childrenName">
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
            <Form.Item<FieldType>
              label="Remarks"
              name="remarks"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
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
