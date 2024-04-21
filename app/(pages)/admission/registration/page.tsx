"use client";

import {
  HeartOutlined,
  SmileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Steps } from "antd";
import { useState } from "react";
import FormStudent from "./components/form-child/form";
import FormInformation from "./components/form-information";
import FormParents from "./components/form-parents";
import FormTalent from "./components/form-talent";
import styles from "./styles.module.scss";

const description = "Lorem ipsum dolor sit, amet elit. Nam, maiores.";

function Page() {
  const [activeStep, setActiveStep] = useState(0);

  const next = () => {
    setActiveStep((prev) => prev + 1);
  };

  const prev = () => {
    setActiveStep((prev) => prev - 1);
  };

  const setepItems = [
    {
      title: "Child Particular's",
      icon: <UserOutlined />,
      description,
      content: <FormStudent nextStep={() => next()} />,
    },
    {
      title: "Parent Particular's",
      description,
      icon: <TeamOutlined />,
      content: <FormParents prevStep={() => prev()} nextStep={() => next()} />,
    },
    {
      title: "Child Interest & Bckground",
      description,
      content: <FormTalent prevStep={() => prev()} nextStep={() => next()} />,
      icon: <HeartOutlined />,
    },
    {
      title: "Information & Declaration",
      description,
      content: <FormInformation prevStep={() => prev()} />,
      icon: <SmileOutlined />,
    },
  ];

  const items = setepItems.map((row) => {
    const { content, ...rest } = row;
    return rest;
  });

  return (
    <div className={styles.container}>
      <br />
      <Steps
        current={activeStep}
        className="admissionRegistrationStep"
        items={items}
      />
      <br />

      {setepItems[activeStep].content}
    </div>
  );
}

export default Page;
