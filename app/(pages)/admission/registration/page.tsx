"use client";

import {
  HeartOutlined,
  SmileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Steps } from "antd";
import FormStudent from "./components/form/form";
import styles from "./styles.module.scss";

const description = "Lorem ipsum dolor sit, amet elit. Nam, maiores.";

function Page() {
  return (
    <div className={styles.container}>
      <br />
      <Steps
        className="admissionRegistrationStep"
        items={[
          {
            title: "Child Particular's",
            status: "finish",
            icon: <UserOutlined />,
            description,
          },
          {
            title: "Parent Particular's",
            description,
            status: "wait",
            icon: <TeamOutlined />,
          },
          {
            title: "Child Interest & Background",
            status: "wait",
            description,
            icon: <HeartOutlined />,
          },
          {
            title: "Information & Declaration",
            description,
            status: "wait",
            icon: <SmileOutlined />,
          },
        ]}
      />

      <br />

      <FormStudent />
    </div>
  );
}

export default Page;
