"use client";

import { notifTryAgain, urls } from "@/consts";
import { useAntdContext } from "@/contexts";
import { fieldRules, today } from "@/libs/helpers";
import { getParent } from "@/pages/admission/parent-data/action";
import type { EmailBody, VoidMethod } from "@/types";
import { DatePicker, Form, Input, Modal, TimePicker } from "antd";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { updateAdmissionPhase } from "../../action";
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
  const { api } = useAntdContext();
  const [loading, setloading] = useState(false);

  const onFinish = async () => {
    try {
      if (!data?.id) {
        throw new Error("something went wrong");
      }

      const v = form.getFieldsValue();

      const body: EmailBody = {
        ...v,
        type: "Assessment",
      };

      setloading(true);
      const x = await fetch(urls.api.email, {
        method: "post",
        body: JSON.stringify(body),
      });

      await updateAdmissionPhase(data?.id, "Assessment");

      const y = await x.json();

      api?.success({
        message: "Assessment Invitation",
        description: "Invitation sent successfully",
        duration: 2.5,
      });

      closeModal();
    } catch (e: any) {
      const msg = String(e.message);
      api?.error(notifTryAgain(msg));
    } finally {
      setloading(false);
    }
  };

  const initialValues = {
    time: dayjs("09:00", "HH:mm"),
  };

  const getParentData = async () => {
    const w = localStorage.getItem("auth");
    const z = await getParent(Number(w));

    return JSON.parse(z?.data ?? "{}");
  };

  const init = async () => {
    const dataStudent = JSON.parse(data?.data?.studentRegistration1 ?? "{}");
    const x = await getParentData();

    form.setFieldsValue({
      date: today(),
      emails: [x.email_father, x.email_mother].filter(Boolean).join(", "),
      location: "Kids Republic School",
      unit: dataStudent.unit,
    });
  };

  useEffect(() => {
    if (open) {
      init();
    }
  }, [open]);

  return (
    <div>
      <br />
      <br />
      <br />
      <Modal
        title="Schedule Student Assesment"
        open={open}
        width={`60vw`}
        okText="Submit"
        cancelButtonProps={{ disabled: loading }}
        okButtonProps={{ loading }}
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
            label="Unit"
            name="unit"
            rules={fieldRules(["required"])}
          >
            <Input disabled />
          </Form.Item>

          <Form.Item<FormInterview>
            label="emails"
            name="emails"
            help="separated with comma"
            rules={fieldRules(["required"])}
          >
            <Input />
          </Form.Item>
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

          {/* <Form.Item<FormInterview> label="message" name="message">
            <Input.TextArea rows={11} />
          </Form.Item> */}
        </Form>

        <br />
      </Modal>
    </div>
  );
}

export default ModalInterview;
