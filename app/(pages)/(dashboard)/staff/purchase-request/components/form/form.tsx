"use client";

import React, { memo, useEffect, useState } from "react";
import { Col, Typography, Form, Input, Row } from "antd";
import type { FormFields } from "../../type";
import { fieldRules } from "@/libs/helpers";
import { ButtonForm } from "@/c";
import TableForm from "../table-form";
import { useGlobalStore } from "@/libs/zustand/StoreProvider";
import { useAntdContext } from "@/contexts";
import { useParams, useRouter } from "next/navigation";
import { store } from "../../action";
import {
  notifStoreSuccess,
  notifStoreError,
  notifUpdateSuccess,
  notifUpdateError,
  trueFalseOptions,
} from "@/consts";

const initialValues = {};

interface Props {
  vendor: any;
}

function FormVendor({ vendor }: Props) {
  const { id } = useParams();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const { purchaseRequestItem } = useGlobalStore((state: any) => state);
  const { api } = useAntdContext();
  const router = useRouter();

  const onFinish = async (values: FormFields): Promise<void> => {
    if (purchaseRequestItem.length < 1) {
      api?.error(notifStoreError("Please add purchase item"));
    }

    const isEdit = values.id;
    try {
      setLoading(true);

      await store({
        ...values,
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
    // setLoadingEdit(true);
    // const dataEdit = await show(Number(id));
    // // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    // const date = [dayjs(dataEdit?.dateFrom), dayjs(dataEdit?.dateTo)];
    // form.setFieldsValue({ ...dataEdit, date });
    // setLoadingEdit(false);
  };

  const handleChange = (v: any, w: any) => {};

  useEffect(() => {
    if (id) {
      void fetchDataEdit();
    }
  }, []);

  return (
    <div>
      <Form
        name="basic"
        onFieldsChange={handleChange}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ ...initialValues, id }}
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onFinish={onFinish}
        form={form}
        autoComplete="off"
      >
        <Typography.Title level={5}>General Information</Typography.Title>
        <br />
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item<FormFields> hidden label="Id" name="id">
              <Input type="hidden" />
            </Form.Item>

            {/* 
            <Form.Item<FormFields>
              label="Vendor"
              name="vendorId"
              rules={fieldRules(["required"])}
            >
              <Select options={selectOptions(vendor, "name", "id")} />
            </Form.Item> */}

            {/* <Form.Item<FormFields>
              label="Payment"
              name="payment"
              rules={fieldRules(["required"])}
            >
              <Select options={paymentOptions} />
            </Form.Item> */}

            <Form.Item<FormFields>
              label="remarks"
              name="remarks"
              rules={fieldRules(["required"])}
            >
              <Input.TextArea />
            </Form.Item>
          </Col>
          <Col span={12}>
            {/* <Form.Item<FormFields>
              label="Purchase Date"
              name="purchaseDate"
              rules={fieldRules(["required"])}
            >
              <DatePicker disabledDate={datePickerDisablePast} />
            </Form.Item>

            <Form.Item<FormFields>
              label="Delivery Date"
              name="deliveryDate"
              rules={fieldRules(["required"])}
            >
              <DatePicker />
              <DatePicker disabledDate={datePickerDisablePast} />
            </Form.Item> */}
          </Col>
        </Row>
        <br />

        <Typography.Title level={5}>Items Information</Typography.Title>
        <br />

        <TableForm />
        <br />

        <ButtonForm />
      </Form>
    </div>
  );
}

export default memo(FormVendor);
