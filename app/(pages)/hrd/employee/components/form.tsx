"use client";

import React from "react";
import {
  Button,
  Checkbox,
  DatePicker,
  Col,
  Form,
  Input,
  Row,
  Typography,
  Select,
} from "antd";
import { FieldType } from "../type";
import {
  CheckCircleFilled,
  CheckOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

function FormEmployee() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        {/* //* Personal Information */}
        <Typography.Title level={5}>Personal Information</Typography.Title>
        {/* <Typography.Title level={5}>Contact Information</Typography.Title> */}
        <br />
        <Row gutter={24}>
          <Col offset={1} span={10}>
            <Form.Item<FieldType>
              label="First Name"
              name="firstName"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item<FieldType>
              label="Hire Date"
              name="hireDate"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <DatePicker />
            </Form.Item>

            <Form.Item<FieldType>
              label="Place of Birth"
              name="placeOfBirth"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item<FieldType>
              label="Religion"
              name="religion"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Select />
            </Form.Item>

            <Form.Item<FieldType>
              label="Photo"
              name="photo"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item<FieldType>
              label="Gender"
              name="gender"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Select />
            </Form.Item>
            <Form.Item<FieldType>
              label="Blood Type"
              wrapperCol={{ span: 6 }}
              name="bloodType"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Select />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item<FieldType>
              label="Last Name"
              name="lastName"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item<FieldType>
              label="Position"
              name="positionId"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Select />
            </Form.Item>

            <Form.Item<FieldType>
              label="Date of Birth"
              name="dob"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <DatePicker />
            </Form.Item>
            <Form.Item<FieldType>
              label="Tribe"
              name="tribe"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
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
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item<FieldType>
              label="Phone 2"
              name="phone2"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item<FieldType>
              label="Family Contact"
              name="familyPhone"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item<FieldType>
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item<FieldType>
              label="Address"
              name="address"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input.TextArea />
            </Form.Item>
            <Form.Item<FieldType>
              label="Zip Code"
              name="zipCode"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
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

        <br />
        <Row gutter={24}>
          <Col offset={2} span={7}>
            <Form.Item wrapperCol={{ offset: 8 }}>
              <Button
                icon={<CheckOutlined />}
                size="large"
                block
                type="primary"
                htmlType="submit"
              >
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default FormEmployee;
