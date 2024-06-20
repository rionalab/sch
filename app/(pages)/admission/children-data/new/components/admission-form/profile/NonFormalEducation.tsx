import { employeeUnitOptions } from "@/consts";
import { FormChild } from "@/pages/admission/forms/type";
import { Col, Form, Input, Row, Select, Typography, UploadFile } from "antd";
import { Dispatch, SetStateAction } from "react";
import Documents from "./documents";

export interface DocumentsProps {
  setFilePhoto: Dispatch<SetStateAction<UploadFile<any>[]>>;
  setFamilyCard: Dispatch<SetStateAction<UploadFile<any>[]>>;
  setIdCardFather: Dispatch<SetStateAction<UploadFile<any>[]>>;
  setIdCardMother: Dispatch<SetStateAction<UploadFile<any>[]>>;
  setBirthCertificate: Dispatch<SetStateAction<UploadFile<any>[]>>;
  filePhoto: UploadFile<any>[];
  familyCard: UploadFile<any>[];
  idCardFather: UploadFile<any>[];
  idCardMother: UploadFile<any>[];
  birthCertificate: UploadFile<any>[];

  immunizationCertificate: UploadFile<any>[];
  setImmunizationCertificate: Dispatch<SetStateAction<UploadFile<any>[]>>;
}

function NonFormalEducation(props: DocumentsProps) {
  const [form] = Form.useForm<{ name: string; age: number }>();
  const isPaid = Form.useWatch("nonFormalEducation", form);

  return (
    <>
      <Row gutter={24}>
        <Col span={10}>
          <Typography.Title level={5}>Background Education</Typography.Title>
          <br />
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
          <Form.Item<FormChild> label="City" name="previousSchoolCity">
            <Input />
          </Form.Item>

          <Form.Item<FormChild> label="Address" name="previousSchoolAddress">
            <Input.TextArea />
          </Form.Item>

          <Form.Item<FormChild> label="Remarks" name="previousSchoolRemarks">
            <Input.TextArea />
          </Form.Item>

          <Documents {...props} />
        </Col>

        <Col span={2}></Col>

        <Col span={10}>
          <Typography.Title level={5}>Informal Education</Typography.Title>
          <br />
          {[1, 2, 3].map((index, x) => {
            return (
              <>
                <Form.Item<FormChild>
                  label={`Type Activities ${index}`}
                  name={`typeActivities${index}` as keyof FormChild}
                >
                  <Input />
                </Form.Item>

                <Form.Item<FormChild>
                  label="Location"
                  name={`locationActivities${index}` as keyof FormChild}
                >
                  <Input />
                </Form.Item>

                <Form.Item<FormChild>
                  label="Time"
                  name={`timeActivities${index}` as keyof FormChild}
                >
                  <Input />
                </Form.Item>

                <Form.Item<FormChild>
                  label="Start - End year"
                  name={`startEndActivities${index}` as keyof FormChild}
                >
                  <Input />
                </Form.Item>
                <br />
              </>
            );
          })}
        </Col>
      </Row>
    </>
  );
}

export default NonFormalEducation;
