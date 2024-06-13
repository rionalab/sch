"use client";

import { Anchor, Col, Row } from "antd";
import styles from "./styles.module.scss";
import FormStudent from "../registration/components/form-child/form";
import FormParent from "./components/form";
import FormParents from "../registration/components/form-parents";

function Page() {
  return (
    <>
      <div className={`${styles.container} post`}>
        <Row>
          <Col span={16}>
            <br />
            <br />
            <br />
            <h3>Parent Registration</h3>
            <FormParent />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Page;
