"use client";

import { notifTryAgain, urls } from "@/consts";
import { useAntdContext } from "@/contexts";
import { fieldRules, today } from "@/libs/helpers";
import { getParent } from "@/pages/admission/parent-data/action";
import type { EmailBody, VoidMethod } from "@/types";
import { DatePicker, Form, Input, Modal, TimePicker } from "antd";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { updateAdmissionPhase, updatePayment } from "../../action";
import type { StudentRegistration } from "../../type";

interface Props {
  data?: StudentRegistration;
  open: boolean;
  openModal: VoidMethod;
  closeModal: VoidMethod;
}

function ModalPayment(props: Props) {
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
        type: "payment",
      };

      setloading(true);
      const x = await fetch(urls.api.email, {
        method: "post",
        body: JSON.stringify(body),
      });

      await updatePayment(data?.id, {
        date: today(),
        ...body,
        status: "new",
      });

      const y = await x.json();

      api?.success({
        message: "Payment",
        description: "Payment Info sent successfully",
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

  const getParentData = async (w: number) => {
    console.log({ w });
    const z = await getParent(Number(w));

    return JSON.parse(z?.data ?? "{}");
  };

  const init = async () => {
    const dataStudent = JSON.parse(data?.data?.studentRegistration1 ?? "{}");
    const x = await getParentData(Number(data?.userId));

    console.log({ data, dataStudent, x }, Number(data?.userId));

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
    <>
      <Modal
        title="Payment"
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
          initialValues={{}}
          form={form}
          onFinish={onFinish}
          autoComplete="off"
        >
          <br />
          <Form.Item label="Unit" name="unit" rules={fieldRules(["required"])}>
            <Input disabled />
          </Form.Item>

          <Form.Item
            label="emails"
            name="emails"
            help="separated with comma"
            rules={fieldRules(["required"])}
          >
            <Input />
          </Form.Item>
          <br />

          <Form.Item label="remarks" name="Remarks">
            <Input.TextArea rows={11} />
          </Form.Item>
        </Form>

        <br />
      </Modal>
    </>
  );
}

export default ModalPayment;
