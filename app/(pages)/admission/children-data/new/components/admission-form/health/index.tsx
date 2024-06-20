import { notifStoreError, notifUpdateError, trueFalseOptions } from "@/consts";
import { useAntdContext } from "@/contexts";
import { storeLocalStorage } from "@/pages/admission/helper";
import { CheckOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Select, Typography } from "antd";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const storageName = "studentRegistration2";

interface Props {
  nextStep: () => void;
  prevStep: () => void;
}

interface IFormHealth {
  [key: string]: string | number; // This allows any string key with a string or number value

  weight: string;
  height: string;
  bloodType: string;
  immunizationRecord1: string;
}

const initialValues = {};
const initialValues2 = {
  weight: 10,
  bloodType: "o",
  height: 99,
  glasses: true,

  immunizationRecordType1: "immunizationRecordType1",
  immunizationRecordYear1: "immunizationRecordYear1",
  immunizationRecordType2: "immunizationRecordType2",
  immunizationRecordYear2: "immunizationRecordYear2",
  immunizationRecordType3: "immunizationRecordType3",
  immunizationRecordYear3: "immunizationRecordYear3",

  sicknessType1: "sicknessType1",
  sicknessAge1: "sicknessAge1",
  sicknessMedication1: "sicknessMedication1",

  sicknessType2: "sicknessType2",
  sicknessAge2: "sicknessAge2",
  sicknessMedication2: "sicknessMedication2",

  sicknessType3: "sicknessType3",
  sicknessAge3: "sicknessAge3",
  sicknessMedication3: "sicknessMedication3",

  allergyType1: "allergyType1",
  allergyAge1: "allergyAge1",
  allergyTypeMedication1: "allergyTypeMedication1",

  allergyType2: "allergyType2",
  allergyAge2: "allergyAge2",
  allergyTypeMedication2: "allergyTypeMedication2",

  allergyType3: "allergyType3",
  allergyAge3: "allergyAge3",
  allergyTypeMedication3: "allergyTypeMedication3",

  healthDesc1: "healthDesc1",
  healthDesc2: "healthDesc2",
  healthDesc3: "healthDesc3",
  healthDesc4: "healthDesc4",
  healthDesc5: "healthDesc5",
  healthDesc6: "healthDesc6",
};

function FormHealth({ nextStep, prevStep }: Props) {
  const [form] = Form.useForm();
  const { api } = useAntdContext();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [loadingEdit, setLoadingEdit] = useState(false);

  const handleFormChange = (changedValues: any, allValues: any) => {
    storeLocalStorage(storageName, allValues);
  };

  const fetchDefault = () => {
    const stored = localStorage.getItem(storageName);
    if (stored) {
      const json = JSON.parse(stored);

      form.setFieldsValue({
        ...json,
        // transform if exist
        // ...
      });
    }
  };

  const onFinish = async (values: IFormHealth) => {
    const isEdit = values.id;
    try {
      storeLocalStorage(storageName, values);
      nextStep();
    } catch (e: any) {
      const msg = String(e.message);
      api?.error(isEdit ? notifUpdateError(msg) : notifStoreError(msg));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDefault();
  }, []);

  return (
    <div>
      <br />
      <br />
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        labelWrap
        className={loadingEdit ? "dNone" : ""}
        onValuesChange={handleFormChange}
        initialValues={{ ...initialValues, id }}
        form={form}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Button onClick={() => form.setFieldsValue(initialValues2)}>
          Auto fill
        </Button>
        <br />
        <br />
        <Typography.Title level={5}>General</Typography.Title>
        <br />

        <Row gutter={24}>
          <Col span={10}>
            <Form.Item<IFormHealth> label="Weight (Kg)" name="weight">
              <Input />
            </Form.Item>

            <Form.Item<IFormHealth> label="Blood Type" name="bloodType">
              <Input />
            </Form.Item>
          </Col>
          <Col span={2}></Col>
          <Col span={10}>
            <Form.Item<IFormHealth> label="Height (Cm)" name="height">
              <Input />
            </Form.Item>

            <Form.Item<IFormHealth> label="Wear Glasses" name="glasses">
              <Select options={trueFalseOptions} />
            </Form.Item>
          </Col>
        </Row>

        <br />
        <br />
        <Row gutter={24}>
          <Col span={10}>
            <Typography.Title level={5}>Immunization Record</Typography.Title>
            <br />

            {[1, 2, 3].map((index, i) => {
              return (
                <React.Fragment key={i}>
                  <Form.Item<IFormHealth>
                    label={`Type of Immunization (${index})`}
                    name={`immunizationRecordType${index}`}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item<IFormHealth>
                    label={`year`}
                    name={`immunizationRecordYear${index}`}
                  >
                    <Input />
                  </Form.Item>
                </React.Fragment>
              );
            })}

            <br />
            <br />

            <Typography.Title level={5}>Allergies</Typography.Title>
            <br />
            {[1, 2, 3].map((index, i) => (
              <React.Fragment key={i}>
                <Form.Item<IFormHealth>
                  label={`Type of Allergy (${index})`}
                  name={`allergyType${index}`}
                >
                  <Input />
                </Form.Item>

                <Form.Item<IFormHealth>
                  label={`Age`}
                  name={`allergyAge${index}`}
                >
                  <Input />
                </Form.Item>

                <Form.Item<IFormHealth>
                  label={`Medication`}
                  name={`allergyTypeMedication${index}`}
                >
                  <Input.TextArea />
                </Form.Item>
                <br />
              </React.Fragment>
            ))}
          </Col>
          <Col span={2}></Col>
          <Col span={10}>
            <Typography.Title level={5}>
              Health History/Physical or Mental Disorder
            </Typography.Title>
            <br />

            {[1, 2, 3].map((index, i) => (
              <React.Fragment key={i}>
                <Form.Item<IFormHealth>
                  label={`Sickness (${index})`}
                  name={`sicknessType${index}`}
                >
                  <Input />
                </Form.Item>

                <Form.Item<IFormHealth>
                  label={`Age`}
                  name={`sicknessAge${index}`}
                >
                  <Input />
                </Form.Item>

                <Form.Item<IFormHealth>
                  label={`Medication`}
                  name={`sicknessMedication${index}`}
                >
                  <Input.TextArea />
                </Form.Item>
                <br />
              </React.Fragment>
            ))}
          </Col>
        </Row>

        <br />
        <br />
        <Typography.Title level={5}>Others</Typography.Title>

        <Row gutter={24}>
          <Col span={12}>
            <Form.Item<IFormHealth>
              labelCol={{ span: 24 }}
              label="Does child have any present illness (No/Yes)?  If yes describe"
              name={`healthDesc1`}
            >
              <Input.TextArea />
            </Form.Item>

            <Form.Item<IFormHealth>
              labelCol={{ span: 24 }}
              label={`Allergies (include drug allergies): Ever had a serious respiratory reaction to a food, bee sting or a drug?`}
              name={`healthDesc2`}
            >
              <Input.TextArea />
            </Form.Item>

            <Form.Item<IFormHealth>
              labelCol={{ span: 24 }}
              label="Medication child is taking:"
              name={`healthDesc3`}
            >
              <Input.TextArea />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item<IFormHealth>
              labelCol={{ span: 24 }}
              label="Hospitalization, Serious injuries: Why? When?"
              name={`healthDesc4`}
            >
              <Input.TextArea />
            </Form.Item>

            <Form.Item<IFormHealth>
              labelCol={{ span: 24 }}
              label={` Eye or Vision Problems, describe :`}
              name={`healthDesc5`}
            >
              <Input.TextArea />
            </Form.Item>

            <Form.Item<IFormHealth>
              labelCol={{ span: 24 }}
              label="Hearing problem, multiple ear infection, describe:"
              name={`healthDesc6`}
            >
              <Input.TextArea />
            </Form.Item>
          </Col>
        </Row>

        <br />
        <br />
        <Row gutter={24}>
          <Col span={21}>
            <Form.Item wrapperCol={{ offset: 4 }}>
              <Button
                onClick={() => {
                  prevStep();
                }}
                style={{ marginRight: 8 }}
                disabled={loading}
                htmlType="button"
              >
                Back
              </Button>

              <Button
                icon={<CheckOutlined />}
                disabled={loading}
                type="primary"
                style={{ paddingLeft: 50, paddingRight: 50 }}
                htmlType="submit"
              >
                Next
              </Button>
            </Form.Item>
          </Col>
          <Col></Col>
        </Row>
      </Form>
    </div>
  );
}

export default FormHealth;
