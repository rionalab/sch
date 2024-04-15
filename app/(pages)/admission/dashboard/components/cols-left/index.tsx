import React from "react";
import { FileProtectOutlined } from "@ant-design/icons";
import styles from "./styles.module.scss";
import { Collapse } from "antd";
import type { CollapseProps } from "antd";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "Application for Admission",
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: "Health Examination Records",
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: "Parent’s Questionaire",
    children: <p>{text}</p>,
  },
  {
    key: "4",
    label: "Vehicle Registration",
    children: <p>{text}</p>,
  },
  {
    key: "5",
    label: "School Recomendation",
    children: <p>{text}</p>,
  },
];

function ColsLeft() {
  return (
    <div className={styles.container}>
      <h3>PRIMARY SCHOOL REGISTRATION PROCESS</h3>
      <h4>
        <FileProtectOutlined />
        &nbsp; Registration form
      </h4>
      <Collapse
        accordion
        className={`collapseCustom  ${styles.collapse}`}
        bordered={false}
        defaultActiveKey={["1"]}
        items={items}
      />
    </div>
  );
}

export default ColsLeft;
