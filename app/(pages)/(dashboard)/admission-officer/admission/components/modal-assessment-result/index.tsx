"use client";

import { assResultOptions, notifTryAgain, urls } from "@/consts";
import { useAntdContext } from "@/contexts";
import { fieldRules, today } from "@/libs/helpers";
import type { VoidMethod } from "@/types";
import {
  DatePicker,
  Divider,
  Form,
  Input,
  Modal,
  Select,
  TimePicker,
} from "antd";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import type { StudentRegistration } from "../../type";
import { getParent } from "@/pages/admission/parent-data/action";
import { updateAdmissionPhase } from "../../action";

interface Props {
  data?: StudentRegistration;
  open: boolean;
  openModal: VoidMethod;
  closeModal: VoidMethod;
}

function ModalAssResult(props: Props) {
  const [loading, setloading] = useState(false);
  const { open, data, closeModal, openModal } = props;
  const [form] = Form.useForm();
  const { api } = useAntdContext();
  const { unit } = JSON.parse(data?.data?.studentRegistration1 ?? "{}");

  const initialValues = {
    time: dayjs("09:00", "HH:mm"),
  };

  const onFinish = async () => {
    try {
      if (!data?.id) {
        throw new Error("something went wrong");
      }

      setloading(true);
      const v = form.getFieldsValue();
      const body = {
        ...v,
        type: v.result,
      };

      const x = await fetch(urls.api.email, {
        method: "post",
        body: JSON.stringify(body),
      });

      await updateAdmissionPhase(data?.id, "Interview", body);

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
      result: "PASS",
      emails: [x.email_father, x.email_mother].filter(Boolean).join(", "),
      location: "Kids Republic School",
      unit: dataStudent.unit,
    });
  };

  useEffect(() => {
    if (open) {
      form.resetFields();
      init();
    }
  }, [open]);

  return (
    <div>
      <Modal
        title="Interview Invitation"
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

          <Form.Item
            label="Result"
            name="result"
            rules={fieldRules(["required"])}
          >
            <Select options={assResultOptions} />
          </Form.Item>

          <Form.Item
            label="Remarks"
            name="remarks"
            rules={fieldRules(["required"])}
          >
            <Input.TextArea />
          </Form.Item>

          <Divider />

          <Form.Item
            label="emails"
            name="emails"
            help="separated with comma"
            rules={fieldRules(["required"])}
          >
            <Input />
          </Form.Item>

          <br />

          <Form.Item label="Date" name="date" rules={fieldRules(["required"])}>
            <DatePicker />
          </Form.Item>

          <Form.Item label="Time" name="time" rules={fieldRules(["required"])}>
            <TimePicker format={"HH:mm"} />
          </Form.Item>

          <Form.Item
            label="location"
            name="location"
            rules={fieldRules(["required"])}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default ModalAssResult;
