import React, { useState } from "react";
import { fieldRules } from "@/libs/helpers";
import { Checkbox, Col, Form, Input } from "antd";
import type { FormParentType } from "../../type";

function FormParentGeneral() {
  const [showMotherAddress, setshowMotherAddress] = useState(false);

  return (
    <>
      <Col span={24}>
        <h6 className="title2">Main Information</h6>
      </Col>
      <Col span={10}>
        <h6 className="title3">Father's Information</h6>

        <Form.Item<FormParentType>
          label="Full Name"
          name={`fullName_father`}
          rules={fieldRules(["required"])}
        >
          <Input />
        </Form.Item>

        <Form.Item<FormParentType>
          label="Phone Number"
          name={`phoneNumber_father`}
          rules={fieldRules(["required"])}
        >
          <Input />
        </Form.Item>

        <Form.Item<FormParentType>
          label="Email"
          name={`email_father`}
          rules={fieldRules(["required"])}
        >
          <Input />
        </Form.Item>

        <Form.Item<FormParentType>
          label="Address"
          name={`address_father`}
          rules={fieldRules(["required"])}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item<FormParentType>
          name="address_mother_same_as_father"
          style={{ marginTop: "-16px" }}
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox
            defaultChecked={true}
            onChange={(e: any) => {
              setshowMotherAddress(!showMotherAddress);
            }}
          >
            Mother's Address
          </Checkbox>
        </Form.Item>
      </Col>
      <Col span={2}></Col>
      <Col span={10}>
        <h6 className="title3">Mother's Information</h6>
        <Form.Item<FormParentType>
          label="Full Name"
          name={`fullName_mother`}
          rules={fieldRules(["required"])}
        >
          <Input />
        </Form.Item>

        <Form.Item<FormParentType>
          label="Phone Number"
          name={`phoneNumber_mother`}
          rules={fieldRules(["required"])}
        >
          <Input />
        </Form.Item>

        <Form.Item<FormParentType>
          label="Email"
          name={`email_mother`}
          rules={fieldRules(["required"])}
        >
          <Input />
        </Form.Item>

        {showMotherAddress && (
          <Form.Item<FormParentType>
            label="Address"
            name={`address_mother`}
            rules={fieldRules(["required"])}
          >
            <Input.TextArea />
          </Form.Item>
        )}
      </Col>
    </>
  );
}

export default FormParentGeneral;
