"use client";

import React from "react";
import { useEffect, useState } from "react";
import { CheckOutlined } from "@ant-design/icons";
import {
  fieldRules,
  prismaToForm,
  today,
  uploadFileClient,
} from "@/libs/helpers";
import { useParams } from "next/navigation";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Typography,
} from "antd";
import { IFormParent } from "../type";
import FormParents from "../../registration/components/form-parents";

const initialValues: IFormParent = {};

function FormParent() {
  const [form] = Form.useForm();
  const [loadingEdit, setLoadingEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const onFinish = async (values: IFormParent) => {
    //  const isEdit = values.id;
    try {
      // const docs = {
      //   photo: await uploadFileClient(filePhoto),
      //   familyCard: await uploadFileClient(familyCard),
      //   idCardFather: await uploadFileClient(idCardFather),
      //   idCardMother: await uploadFileClient(idCardMother),
      // };
      // console.log(docs);
      // localStorage.setItem(
      //   "studentRegistration1",
      //   JSON.stringify({
      //     ...values,
      //     ...docs,
      //   }),
      // );
      // nextStep();
    } catch (e: any) {
      // const msg = String(e.message);
      // api?.error(isEdit ? notifUpdateError(msg) : notifStoreError(msg));
    } finally {
      setLoading(false);
    }
  };

  const fetchDataEdit = async () => {
    setLoadingEdit(true);
    // const dataEdit = await show(Number(id));

    // if (dataEdit) {
    //   form.setFieldsValue(
    //     prismaToForm({ ...dataEdit, photo: [], oldPhoto: dataEdit.photo }),
    //   );
    // }
    setLoadingEdit(false);
  };

  useEffect(() => {
    if (id) {
      void fetchDataEdit();
    }
  }, []);

  return (
    <>
      {/* <FormParents nextStep={() => null} prevStep={() => null} /> */}

      <Form
        name="basic"
        labelCol={{ span: 8 }}
        labelWrap
        className={loadingEdit ? "dNone" : ""}
        // wrapperCol={{ span: 24 }}
        initialValues={{ ...initialValues, id }}
        form={form}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item<IFormParent> hidden label="Id" name="id">
          <Input type="hidden" />
        </Form.Item>

        <Row gutter={24}>
          <Col span={24}>
            <br />
            <Form.Item<IFormParent>
              label="Father's Name"
              name="fatherName"
              rules={fieldRules(["required"])}
            >
              <Input />
            </Form.Item>

            <Form.Item<IFormParent>
              label="Mother's Name"
              name="motherName"
              rules={fieldRules(["required"])}
            >
              <Input />
            </Form.Item>

            <Form.Item<IFormParent>
              label="Contact Number"
              wrapperCol={{ span: 8 }}
              name="phoneNumber"
              rules={fieldRules(["required"])}
            >
              <Input />
            </Form.Item>

            <Form.Item<IFormParent>
              label="Email"
              wrapperCol={{ span: 12 }}
              name="email"
              rules={fieldRules(["required"])}
            >
              <Input />
            </Form.Item>

            {/* <Form.Item<IFormParent>
              label="Regis. Date"
              name="regisDate"
              rules={fieldRules(["required"])}
            >
              <DatePicker />
            </Form.Item>
            <Form.Item<IFormParent> label="Unit" name="unit">
              <Select options={[]} />
            </Form.Item>

            <Form.Item<IFormParent> label="Status" name="status">
              <Select
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
            </Form.Item> */}

            <Form.Item<IFormParent> label="Address" name="oldSchoolAddress">
              <Input.TextArea />
            </Form.Item>
          </Col>
          <Col offset={8}>
            <button className="custom yellow">
              <CheckOutlined />
              Save
            </button>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default FormParent;
