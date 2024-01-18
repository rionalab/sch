/* eslint-disable */
"use client";

import React from "react";
import { Row, Col, Form, Button } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

function ButtonForm({ loading }: { loading?: boolean }) {
  const router = useRouter();

  const handleCancel = () => {
    router.back();
  };

  return (
    <>
      <br />
      <Row gutter={24}>
        <Col span={21}>
          <Form.Item wrapperCol={{ offset: 5 }}>
            <Button
              icon={<CheckOutlined />}
              size="large"
              disabled={loading}
              type="primary"
              style={{ paddingLeft: 50, paddingRight: 50, marginRight: 16 }}
              htmlType="submit"
            >
              {loading ? "Saving..." : "Submit"}
            </Button>

            <Button
              onClick={handleCancel}
              icon={<CloseOutlined />}
              size="large"
              disabled={loading}
              htmlType="submit"
            >
              Cancel
            </Button>
          </Form.Item>
        </Col>
        <Col></Col>
      </Row>
    </>
  );
}

export default ButtonForm;
