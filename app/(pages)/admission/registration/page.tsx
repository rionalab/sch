'use client'

import React from "react";
import { Anchor, Progress, Col,Steps, Divider } from 'antd';
import SimpleBar from "simplebar-react";
import styles from "./styles.module.scss";
import { LoadingOutlined, HeartOutlined, TeamOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import FormStudent from "./components/form/form";

const description = "Lorem ipsum dolor sit, amet elit. Nam, maiores.";

function Page() {
  return <div className={styles.container}>
    <br />
<Steps
className="admissionRegistrationStep"
    items={[
      {
        title: "Child Particular's",
        status: 'finish',
        icon: <UserOutlined />,
        description
      },
      {
        title: "Parent Particular's",
        description,
        status: 'wait',
        icon: <TeamOutlined />,
      },
      {
        title: 'Child Interest & Background',
        status: 'wait',
        description,
        icon: <HeartOutlined />,
      },
      {
        title: 'Information & Declaration',
        description,
        status: 'wait',
        icon: <SmileOutlined />,
      },
    ]}
  />

<br />

<FormStudent positions={[]} />


  </div>;
}

export default Page;
