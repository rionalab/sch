import { parentRelationshipOptions } from "@/consts";
import { Col, Form, Row, Select, Typography } from "antd";
import { FormChild } from "../../../forms/type";

function Parent() {
  return (
    <>
      <Typography.Title level={5}>Parent Information</Typography.Title>
      <br />
      <Row gutter={24}>
        <Col span={10}>
          <Form.Item<FormChild>
            label="Father Relationship with Child"
            name="fatherRelationshipWithChild"
          >
            <Select options={parentRelationshipOptions} />
          </Form.Item>
        </Col>
        <Col span={2}></Col>
        <Col span={10}>
          <Form.Item<FormChild>
            label="Mother Relationship with Child"
            name="motherRelationshipWithChild"
          >
            <Select options={parentRelationshipOptions} />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
}

export default Parent;
