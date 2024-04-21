import { Divider, Form, Input } from "antd";
import { FormOthers } from "../../type";

function FieldPersonLives({ index }: { index: number }) {
  return (
    <>
      <Form.Item<FormOthers>
        label={`Name (${index})`}
        name={`personLiveWithName${index}` as keyof FormOthers}
      >
        <Input />
      </Form.Item>

      <Form.Item<FormOthers>
        label="Relation"
        name={`personLiveWithRelation${index}` as keyof FormOthers}
      >
        <Input />
      </Form.Item>

      <Form.Item<FormOthers>
        label="Address"
        name={`personLiveWithAddress${index}` as keyof FormOthers}
      >
        <Input />
      </Form.Item>

      <Form.Item<FormOthers>
        label="Phone"
        name={`personLiveWithPhone${index}` as keyof FormOthers}
      >
        <Input />
      </Form.Item>

      <Form.Item<FormOthers>
        label="Email"
        name={`personLiveWithEmail${index}` as keyof FormOthers}
      >
        <Input />
      </Form.Item>

      <Divider />
    </>
  );
}

export default FieldPersonLives;
