import { parentRelationshipOptions } from "@/consts";
import { FormChild } from "@/pages/admission/forms/type";
import { Col, Divider, Form, Input, Row, Select, Typography } from "antd";

function Talent() {
  return (
    <>
      <Typography.Title level={5}>
        Child Talent/Interest Information
      </Typography.Title>
      <br />

      <Row gutter={24}>
        <Col span={10}>
          <Form.Item<FormChild> label="Arts" name={`arts`}>
            <Input.TextArea />
          </Form.Item>

          <Form.Item<FormChild> label="music" name={`music`}>
            <Input.TextArea />
          </Form.Item>

          <Form.Item<FormChild> label="cognitive" name={`cognitive`}>
            <Input.TextArea />
          </Form.Item>
        </Col>
        <Col span={2}></Col>
        <Col span={10}>
          <Form.Item<FormChild> label="sport" name={`sport`}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item<FormChild> label="organization" name={`organization`}>
            <Input.TextArea />
          </Form.Item>

          <Form.Item<FormChild> label="others" name={`others`}>
            <Input.TextArea />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
}

export default Talent;
