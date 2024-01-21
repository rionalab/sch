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
              onClick={handleCancel}
              style={{ marginRight: 8 }}
              disabled={loading}
              htmlType="submit"
            >
              Cancel
            </Button>

            <Button
              icon={<CheckOutlined />}
              disabled={loading}
              type="primary"
              style={{ paddingLeft: 50, paddingRight: 50, marginRight: 16 }}
              htmlType="submit"
            >
              {loading ? "Saving..." : "Submit"}
            </Button>
          </Form.Item>
        </Col>
        <Col></Col>
      </Row>
    </>
  );
}

export default ButtonForm;
