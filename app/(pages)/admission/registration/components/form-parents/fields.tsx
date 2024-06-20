import React, { useState } from "react";
import { fieldRules } from "@/libs/helpers";
import { Checkbox, Col, DatePicker, Form, Input, Select } from "antd";
import type { FormParentType } from "../../type";
import { religionOptions } from "@/consts";

interface Props {
  title: string;
  items: Items[];
}

export interface Items {
  label: string;
  name: string;
  type?: "datepicker" | "select";
  options?: any[];
  singleField?: boolean;
}

function Fields({ title, items }: Props) {
  return (
    <>
      <Col span={24} style={{ marginTop: 40 }}>
        <h6 className="title2">{title}</h6>
      </Col>

      {["father", "", "mother"].map((col, i) => {
        return (
          <Col key={i} span={col ? 10 : 2}>
            {col && <h6 className="title3">{col}'s Information</h6>}
            {col && (
              <>
                {items.map((f, j) => {
                  const Comp = () => (
                    <React.Fragment key={f.name}>
                      <Form.Item<FormParentType>
                        label={f.label}
                        name={`${f.name}_${col}` as keyof FormParentType}
                      >
                        {f.type === "select" ? (
                          <Select options={f.options} />
                        ) : f.type === "datepicker" ? (
                          <DatePicker />
                        ) : (
                          <Input />
                        )}
                      </Form.Item>
                    </React.Fragment>
                  );

                  if (f.singleField) {
                    if (col === "father") {
                      return <Comp key={f.name} />;
                    } else {
                      return null;
                    }
                  } else {
                    return <Comp key={f.name} />;
                  }
                })}
              </>
            )}
          </Col>
        );
      })}
    </>
  );
}

export default Fields;
