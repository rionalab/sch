/* eslint-disable @typescript-eslint/no-floating-promises */
import { Col, Typography, InputNumber, Form, Input, Row, Select } from "antd";
import { ButtonForm, LoadingModule } from "@/c";
import type { FormPurchaseItemFields as FormFields } from "../../type";
import { fieldRules, selectOptions } from "@/libs/helpers";
import useData from "@/hooks/useData";
import { useGlobalStore } from "@/libs/zustand/StoreProvider";
import { faker } from "@faker-js/faker";
import { useAntdContext } from "@/contexts";
import { notifStoreError, notifStoreSuccess } from "@/consts";

const initialValues = {
  // name: faker.person.fullName(),
  // unitPrice: 100,
  // quantity: 2,
  // uomId: "1|bh",
  // remarks: "this is remakrs",
};
const id = 1;

interface Props {
  closeModal: () => void;
}

function FormPurchasedItem({ closeModal }: Props) {
  const [form] = Form.useForm();
  const { api } = useAntdContext();
  const {
    loading,
    data: { inventory },
  } = useData(["inventory"]);
  const { setPurchaseRequestItem, purchaseRequestItem } = useGlobalStore(
    (state: any) => state
  );

  const onFinish = async (values: FormFields): Promise<void> => {
    const isExist = purchaseRequestItem.find(
      (row: any) => row.inventoryId === values.inventoryId
    );

    if (isExist) {
      api?.error(notifStoreError("Item already exist"));
      return;
    }

    const name = 1;

    setPurchaseRequestItem("add", { ...values, name });
    closeModal();
  };

  return (
    <div>
      {loading && <LoadingModule />}
      <Form
        disabled={loading}
        style={{ display: loading ? "none" : "" }}
        name="purchaseItem"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ ...initialValues, id }}
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onFinish={onFinish}
        form={form}
        autoComplete="off"
      >
        <Typography.Title level={5}>Add Purchase Item</Typography.Title>
        <br />
        <Row gutter={24}>
          <Col span={21}>
            <Form.Item<FormFields> hidden label="Id" name="id">
              <Input type="hidden" />
            </Form.Item>

            <Form.Item<FormFields>
              label="Item"
              name="inventoryId"
              rules={fieldRules(["required"])}
            >
              <Select
                loading={loading}
                options={selectOptions(inventory, "name", "id")}
              />
            </Form.Item>

            {/* <Form.Item<FormFields>
              label="Name"
              name="name"
              rules={fieldRules(["required"])}
            >
              <Input />
            </Form.Item> */}

            {/* <Form.Item<FormFields>
              label="Price"
              name="unitPrice"
              rules={fieldRules(["required"])}
            >
              <InputNumber style={{ width: "50%" }} />
            </Form.Item> */}

            <Form.Item<FormFields>
              label="Quantity"
              name="quantity"
              rules={fieldRules(["required"])}
            >
              <InputNumber min={1} />
            </Form.Item>

            <Form.Item<FormFields> label="Remarks" name="remarks">
              <Input.TextArea />
            </Form.Item>
          </Col>
        </Row>

        <ButtonForm
          handleCancel={() => {
            closeModal();
          }}
        />
      </Form>
    </div>
  );
}

export default FormPurchasedItem;
