"use client";

import React from "react";
import { useEffect } from "react";
import { Form } from "antd";
import FormParents from "../../registration/components/form-parents";

function FormParent({ setEdit, counter, setCounter, defaultData }: any) {
  const [form] = Form.useForm();

  useEffect(() => {
    if (defaultData) {
      const x = JSON.parse(defaultData.data);
      if (x) {
        form.setFieldsValue(x);
      }
    }
  }, []);

  return (
    <>
      <FormParents
        counter={counter}
        setEdit={setEdit}
        setCounter={setCounter}
        defaultData={defaultData}
      />
    </>
  );
}

export default FormParent;
