import { employeeUnitOptions, parentRelationshipOptions } from "@/consts";
import { Col, Form, Input, Row, Select, Typography } from "antd";
import { FormChild } from "../../../forms/type";

function BackgroundEducation() {
  return (
    <>
      <Typography.Title level={5}>Background Education</Typography.Title>
      <br />
      <Row gutter={24}>
        <Col span={10}>
          <Form.Item<FormChild>
            label="Previous School Name"
            name="previousSchoolName"
          >
            <Input />
          </Form.Item>

          <Form.Item<FormChild> label="Type" name="previousSchoolType">
            <Select options={employeeUnitOptions.filter((w) => w.value)} />
          </Form.Item>

          <Form.Item<FormChild> label="Year" name="previousSchoolYear">
            <Input />
          </Form.Item>
        </Col>
        <Col span={2}></Col>
        <Col span={10}>
          <Form.Item<FormChild> label="City" name="previousSchoolCity">
            <Input />
          </Form.Item>

          <Form.Item<FormChild> label="Address" name="previousSchoolAddress">
            <Input.TextArea />
          </Form.Item>

          <Form.Item<FormChild> label="Remarks" name="previousSchoolRemarks">
            <Input.TextArea />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
}

export default BackgroundEducation;
