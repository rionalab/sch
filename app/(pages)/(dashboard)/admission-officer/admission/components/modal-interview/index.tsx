"use client";

import { emailInterviewTemplate } from "@/app/_email/interview";
import { HMA, dMY, fieldRules } from "@/libs/helpers";
import type { VoidMethod } from "@/types";
import { DatePicker, Form, Input, Modal, TimePicker } from "antd";
import dayjs from "dayjs";
import { useEffect } from "react";
import type { StudentRegistration } from "../../type";
import type { FormInterview } from "./type";

interface Props {
  data?: StudentRegistration;
  open: boolean;
  openModal: VoidMethod;
  closeModal: VoidMethod;
}

function ModalInterview(props: Props) {
  const { open, data, closeModal, openModal } = props;
  const [form] = Form.useForm();
  const dateValue = Form.useWatch("date", form);
  const timeValue = Form.useWatch("time", form);
  const locationValue = Form.useWatch("location", form);

  const onFinish = () => {
    try {
      const formValues = form.getFieldsValue();
      console.log(1111111, formValues);
    } catch (e: any) {
    } finally {
    }
  };

  const initialValues = {};

  useEffect(() => {
    if (open) {
      const dataParent = JSON.parse(
        String(data?.StudentRegistrationParent?.data),
      );

      const parentName =
        dataParent?.fullName_father ?? dataParent?.fullName_mother;
      console.log({ dataParent });

      const date = dMY(dateValue);
      const time = HMA(timeValue);
      const location = locationValue;

      form.setFieldsValue({
        message: emailInterviewTemplate({ parentName, date, time, location }),
      });
    }
  }, [data, dateValue, locationValue, timeValue, open]);

  return (
    <div>
      <br />
      <br />
      <br />
      <Modal
        title="Schedule an Interview"
        open={open}
        width={`60vw`}
        okText="Submit"
        onOk={onFinish}
        onCancel={closeModal}
      >
        <Form
          name="basic"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ ...initialValues }}
          form={form}
          onFinish={onFinish}
          autoComplete="off"
        >
          <br />
          <Form.Item<FormInterview>
            label="Date"
            name="date"
            rules={fieldRules(["required"])}
          >
            <DatePicker />
          </Form.Item>

          <Form.Item<FormInterview>
            label="Time"
            name="time"
            rules={fieldRules(["required"])}
          >
            <TimePicker
              defaultValue={dayjs("09:00", "HH:mm")}
              format={"HH:mm"}
            />
          </Form.Item>

          <Form.Item<FormInterview>
            label="location"
            name="location"
            rules={fieldRules(["required"])}
          >
            <Input />
          </Form.Item>

          <Form.Item<FormInterview> label="message" name="message">
            <Input.TextArea rows={11} />
          </Form.Item>
        </Form>

        <br />
      </Modal>
    </div>
  );
}

export default ModalInterview;
