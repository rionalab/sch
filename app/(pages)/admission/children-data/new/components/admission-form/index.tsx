"use client";

import { FileOutlined } from "@ant-design/icons";
import { Steps } from "antd";
import { useState } from "react";
import FormStudent from "./profile";
import FormHealth from "./health";
import Vehicle from "./vehicle";
import Declaration from "./declaration";

function AdmissionForm() {
  const [activeStep, setActiveStep] = useState(0);

  const next = () => {
    setActiveStep((prev) => prev + 1);
  };

  const prev = () => {
    setActiveStep((prev) => prev - 1);
  };

  const setepItems = [
    {
      title: "Profile",
      icon: <FileOutlined />,
      description: "Enter child's personal details and registration papers",
      content: <FormStudent nextStep={() => next()} />,
    },
    {
      title: "Health",
      icon: <FileOutlined />,
      description: "Enter child's personal details and registration papers",
      content: <FormHealth prevStep={() => prev()} nextStep={() => next()} />,
    },

    {
      title: "Vehicle",
      icon: <FileOutlined />,
      description: " Pick up person / driver / vehicle information",
      content: <Vehicle prevStep={() => prev()} nextStep={() => next()} />,
    },
    {
      title: "Declaration",
      icon: <FileOutlined />,
      description: "  Kids Republic School Policy and Regulation",
      content: <Declaration prevStep={() => prev()} />,
    },
  ];

  const items = setepItems.map((row) => {
    const { content, ...rest } = row;
    return rest;
  });

  return (
    <div>
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

export default AdmissionForm;
