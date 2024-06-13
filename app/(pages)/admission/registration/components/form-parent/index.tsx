import {
  maritalStatusOptions,
  relationWithChildOptions,
  religionOptions,
} from "@/consts";
import { fieldRules } from "@/libs/helpers";
import { Col, DatePicker, Form, Input, Select, Typography } from "antd";
import type { FormParentType } from "../../type";

function FormParent({ type }: { type: "father" | "mother" }) {
  return (
    <>
      <Col span={10}>
        <Typography.Title className="textCapitalize" level={5}>
          {type}'s Information
        </Typography.Title>
        <Form.Item<FormParentType>
          label="Full Name"
          name={`fullName_${type}`}
          rules={fieldRules(["required"])}
        >
          <Input />
        </Form.Item>

        <Form.Item<FormParentType>
          label="Id Type"
          name={`idType_${type}`}
          rules={fieldRules(["required"])}
        >
          <Input />
        </Form.Item>
        <Form.Item<FormParentType>
          label="Id Number"
          name={`idNumber_${type}`}
          rules={fieldRules(["required"])}
        >
          <Input />
        </Form.Item>
        <Form.Item<FormParentType>
          label="Nationality"
          name={`nationality_${type}`}
          rules={fieldRules(["required"])}
        >
          <Input />
        </Form.Item>
        <Form.Item<FormParentType>
          label="Religion"
          name={`religion_${type}`}
          rules={fieldRules(["required"])}
        >
          <Select options={religionOptions} />
        </Form.Item>

        <Form.Item<FormParentType>
          label="Place of Birth"
          name={`placeOfBirth_${type}`}
          rules={fieldRules(["required"])}
        >
          <Input />
        </Form.Item>

        <Form.Item<FormParentType>
          label="Date of Birth"
          name={`dob_${type}`}
          rules={fieldRules(["required"])}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item<FormParentType>
          label="Last Education Title & Major"
          name={`lastEducation_${type}`}
          rules={fieldRules(["required"])}
        >
          <Input />
        </Form.Item>
        <Form.Item<FormParentType>
          label="University Name"
          name={`universityName_${type}`}
          rules={fieldRules(["required"])}
        >
          <Input />
        </Form.Item>

        <Form.Item<FormParentType>
          label="Home Address"
          name={`address_${type}`}
          rules={fieldRules(["required"])}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item<FormParentType>
          label="City"
          name={`city_${type}`}
          rules={fieldRules(["required"])}
        >
          <Input />
        </Form.Item>
        <Form.Item<FormParentType>
          label="Postal Code"
          name={`postalCode_${type}`}
          rules={fieldRules(["required"])}
        >
          <Input />
        </Form.Item>
        <Form.Item<FormParentType>
          label="Phone Number"
          name={`phoneNumber_${type}`}
          rules={fieldRules(["required"])}
        >
          <Input />
        </Form.Item>
        <Form.Item<FormParentType>
          label="Email"
          name={`email_${type}`}
          rules={fieldRules(["required", "email"])}
        >
          <Input />
        </Form.Item>
        <Form.Item<FormParentType>
          label="Occupation & Position"
          name={`occupationPosition_${type}`}
          rules={fieldRules(["required"])}
        >
          <Input />
        </Form.Item>
        <Form.Item<FormParentType>
          label="Name of Institution"
          name={`nameInstitution_${type}`}
          rules={fieldRules(["required"])}
        >
          <Input />
        </Form.Item>
        <Form.Item<FormParentType>
          label="Office Address"
          name={`officeAddress_${type}`}
          rules={fieldRules(["required"])}
        >
          <Input />
        </Form.Item>

        <Form.Item<FormParentType>
          label="Relation with Child"
          name={`relationWithChild_${type}`}
          rules={fieldRules(["required"])}
        >
          <Select options={relationWithChildOptions} />
        </Form.Item>

        <Form.Item<FormParentType>
          label="Marital Status"
          name={`maritalStatus_${type}`}
          rules={fieldRules(["required"])}
        >
          <Select options={maritalStatusOptions} />
        </Form.Item>

        <Form.Item<FormParentType>
          label="The Child Lives With"
          name={`theChildLivesWith_${type}`}
          rules={fieldRules(["required"])}
        >
          <Input />
        </Form.Item>
      </Col>
    </>
  );
}

export default FormParent;
