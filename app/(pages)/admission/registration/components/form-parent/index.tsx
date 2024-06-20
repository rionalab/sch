import {
  maritalStatusOptions,
  relationWithChildOptions,
  religionOptions,
} from "@/consts";
import { fieldRules } from "@/libs/helpers";
import { Col, DatePicker, Form, Input, Select, Typography } from "antd";
import type { FormParentType } from "../../type";

function FormParent({ type }: { type: "father" | "mother" }) {
  return (
    <>
      <Col span={10}>
        {type === "father" && (
          <Col span={24}>
            <Typography.Title className="formAdmissionSectionTitle" level={5}>
              {type === "father" ? `Main Information` : "\u00A0"}
            </Typography.Title>
          </Col>
        )}
      </Col>
    </>
  );
}

export default FormParent;
