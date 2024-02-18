"use client";

import React, { memo, useEffect, useState } from "react";
import { Col, DatePicker, Form, Input, Row, Select } from "antd";
import { type FormFields } from "../../type";
import dayjs from "dayjs";
import { store, show } from "../../action";
import { useParams, useRouter } from "next/navigation";
import {
  notifStoreSuccess,
  notifStoreError,
  notifUpdateSuccess,
  notifUpdateError,
} from "@/consts";
import { useAntdContext } from "@/contexts";
import { fieldRules } from "@/libs/helpers";
import useSelect from "@/hooks/useSelect";
import { ButtonForm, LoadingModule } from "@/c";

const initialValues = {
  employeeId: process.env.NEXT_PUBLIC_USER_DEMO_ID,
};

function FormVendor() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { api } = useAntdContext();
  const { id } = useParams();
  const [form] = Form.useForm();
  const { leaveType } = useSelect(["leaveType"]);
  const [loadingEdit, setLoadingEdit] = useState(false);

  const onFinish = async (values: FormFields): Promise<void> => {
    const isEdit = values.id;

    try {
      setLoading(true);
      await store({
        ...values,
        date: 1,
        dateTo: values.date[1].format(),
        dateFrom: values?.date?.[0].format(),
      });
      api?.success(isEdit ? notifUpdateSuccess() : notifStoreSuccess());
      router.back();
    } catch (e: any) {
      const msg = String(e.message);

      api?.error(isEdit ? notifUpdateError(msg) : notifStoreError(msg));
    } finally {
      setLoading(false);
    }
  };

  const fetchDataEdit = async () => {
    setLoadingEdit(true);
    const dataEdit = await show(Number(id));
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const date = [dayjs(dataEdit?.dateFrom), dayjs(dataEdit?.dateTo)];
    form.setFieldsValue({ ...dataEdit, date });
    setLoadingEdit(false);
  };

  useEffect(() => {
    if (id) {
      void fetchDataEdit();
    }
  }, []);

  return (
    <div>
      {loadingEdit && <LoadingModule />}
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ ...initialValues, id }}
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        className={loadingEdit ? "dNone" : ""}
        onFinish={onFinish}
        form={form}
        autoComplete="off"
      >
        <br />
        <Row gutter={24}>
          <Col span={13}>
            <Form.Item<FormFields> hidden label="Id" name="id">
              <Input type="hidden" />
            </Form.Item>

            <Form.Item<FormFields> hidden label="Id" name="employeeId">
              <Input type="hidden" />
            </Form.Item>

            <Form.Item<FormFields>
              label="Leave Type"
              name="leaveTypeId"
              rules={fieldRules(["required"])}
            >
              <Select options={leaveType} />
            </Form.Item>

            <Form.Item<FormFields>
              label="Date"
              name="date"
              rules={fieldRules(["required"])}
            >
              <DatePicker.RangePicker />
            </Form.Item>

            <Form.Item<FormFields>
              label="remarks"
              name="remarks"
              rules={fieldRules(["required"])}
            >
              <Input.TextArea />
            </Form.Item>
          </Col>
          <Col span={10}></Col>
        </Row>

        <ButtonForm loading={loading} />
      </Form>
    </div>
  );
}

export default memo(FormVendor);
