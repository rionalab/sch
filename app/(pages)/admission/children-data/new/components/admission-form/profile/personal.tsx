import React from "react";
import { fieldRules } from "@/libs/helpers";
import { genderOptions, religionOptions } from "@/consts";
import {
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Typography,
} from "antd";
import { FormChild } from "../../../forms/type";

function Personal() {
  return (
    <>
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
    </>
  );
}

export default Personal;
