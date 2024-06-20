"use client";

import { Col, Row } from "antd";
import styles from "./styles.module.scss";
import FormParent from "./components/form";
import View from "./components/view";
import { useEffect, useState } from "react";
import { parentHasRegister } from "../helper";
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
          <Col span={24}>
            <br />
            <br />
            <br />
            {hasRegister && !edit ? (
              <View setEdit={setEdit} data={hasRegister} />
            ) : (
              <FormParent
                setCounter={setCounter}
                setEdit={setEdit}
                counter={counter}
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
