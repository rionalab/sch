import { Divider, Form, Input } from "antd";
import { FormOthers } from "../../type";

function FieldActivities({ index }: { index: number }) {
  return (
    <>
      <Form.Item<FormOthers>
        label={`Type Activities ${index}`}
        name={`typeActivities${index}` as keyof FormOthers}
      >
        <Input />
      </Form.Item>

      <Form.Item<FormOthers>
        label="Location"
        name={`locationActivities${index}` as keyof FormOthers}
      >
        <Input />
      </Form.Item>

      <Form.Item<FormOthers>
        label="Time"
        name={`timeActivities${index}` as keyof FormOthers}
      >
        <Input />
      </Form.Item>

      <Form.Item<FormOthers>
        label="Start - End year"
        name={`startEndActivities${index}` as keyof FormOthers}
      >
        <Input />
      </Form.Item>

      <Divider />
    </>
  );
}

export default FieldActivities;
