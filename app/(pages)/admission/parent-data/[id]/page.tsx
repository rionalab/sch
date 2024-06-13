"use client";

import { Anchor, Col, Row } from "antd";
import styles from "./styles.module.scss";
import FormStudent from "../../ registration/components/form-child/form";
import FormParent from "../components/form";
import FormParents from "../../registration/components/form-parents";

function page() {
  return (
    <div className={`${styles.container} post`}>
      <Row>
        <Col span={24}>
          <br />
          <br />
          <br />

          <FormParents />
        </Col>
      </Row>
    </div>
  );
}

export default page;
