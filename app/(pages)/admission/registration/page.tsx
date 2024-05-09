"use client";

import { LoadingModule } from "@/c";
import {
  HeartOutlined,
  SmileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Steps } from "antd";
import { useEffect, useState } from "react";
import { isAllowSubmitAdmission } from "./action";
import FormStudent from "./components/form-child/form";
import FormInformation from "./components/form-information";
import FormParents from "./components/form-parents";
import FormTalent from "./components/form-talent";
import PayFirst from "./components/pay-first";
import styles from "./styles.module.scss";

function Page() {
  const [activeStep, setActiveStep] = useState(0);
  const [allow, setAllow] = useState(false);
  const [loading, setLoading] = useState(true);

  const isAllowRegister = async () => {
    const id = localStorage.getItem("auth");
    const allowSubmit = await isAllowSubmitAdmission(Number(id));

    setAllow(Boolean(allowSubmit));
    setLoading(false);
  };

  useEffect(() => {
    void isAllowRegister();
  }, []);

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
      description: "Enter child's personal details and registration papers",
      content: <FormStudent nextStep={() => next()} />,
    },
    {
      title: "Parent Particular's",
      description: "Provide parent/guardian contact information",
      icon: <TeamOutlined />,
      content: <FormParents prevStep={() => prev()} nextStep={() => next()} />,
    },
    {
      title: "Child Interest & Bckground",
      description: "Share child's interests and background",
      content: <FormTalent prevStep={() => prev()} nextStep={() => next()} />,
      icon: <HeartOutlined />,
    },
    {
      title: "Information & Declaration",
      description: "Review and confirm your submitted information",
      content: <FormInformation prevStep={() => prev()} />,
      icon: <SmileOutlined />,
    },
  ];

  const items = setepItems.map((row) => {
    const { content, ...rest } = row;
    return rest;
  });

  if (loading) {
    return <LoadingModule />;
  }

  return (
    <div className={styles.container}>
      <br />
      {allow ? (
        <>
          <Steps
            current={activeStep}
            className="admissionRegistrationStep"
            items={items}
          />
          <br />
          {setepItems[activeStep].content}
        </>
      ) : (
        <PayFirst />
      )}
    </div>
  );
}

export default Page;
