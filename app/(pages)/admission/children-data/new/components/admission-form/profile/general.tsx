import React, { useState } from "react";
import { fieldRules } from "@/libs/helpers";
import { employeeUnitOptions } from "@/consts";
import { Col, DatePicker, Form, Input, Row, Select, Typography } from "antd";
import { FormChild, RegStatus } from "../../../forms/type";

function General() {
  const [showTransferFields, setShowTransferFields] = useState(false);

  const onStatusChange = (v: RegStatus) => {
    setShowTransferFields(v === "transfer");
  };

  return (
    <>
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
            <Select options={employeeUnitOptions.filter((row) => row.value)} />
          </Form.Item>
          <Form.Item<FormChild> label="Special needs" name="specialNeeds">
            <Input.TextArea />
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
    </>
  );
}

export default General;
