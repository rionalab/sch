"use client";

import { Anchor, Col, Row } from "antd";
import styles from "./styles.module.scss";
import FormStudent from "../registration/components/form-child/form";
import FormParent from "./components/form";
import View from "./components/view";
import FormParents from "../registration/components/form-parents";
import { useEffect, useState } from "react";
import { parentHasRegister } from "../helper";
import { redirect } from "next/navigation";
import { urls } from "@/consts";
import { LoadingModule } from "@/c";

function Page() {
  const [loading, setLoading] = useState(true);
  const [hasRegister, setHasRegister] = useState<any>(null);
  const [edit, setEdit] = useState<any>(false);
  const [counter, setCounter] = useState<any>(1);

  const init = async () => {
    const parentRegister = await parentHasRegister();
    setHasRegister(parentRegister);
    setLoading(false);
  };

  useEffect(() => {
    init();
  }, [edit, counter]);

  if (loading) {
    return <LoadingModule />;
  }

  return (
    <>
      <div className={`${styles.container} post`}>
        <Row>
          <Col span={16}>
            <br />
            <br />
            <br />
            <h3>Parent Registration</h3>
            {hasRegister && !edit ? (
              <View setEdit={setEdit} data={hasRegister} />
            ) : (
              <FormParent
                setCounter={setCounter}
                setEdit={setEdit}
                defaultData={hasRegister}
              />
            )}
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Page;
