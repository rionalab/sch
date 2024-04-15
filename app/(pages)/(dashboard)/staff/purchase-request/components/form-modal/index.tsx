/* eslint-disable @typescript-eslint/no-floating-promises */
import { ButtonForm, LoadingModule } from "@/c";
import { notifStoreError } from "@/consts";
import { useAntdContext } from "@/contexts";
import useData from "@/hooks/useData";
import { fieldRules } from "@/libs/helpers";
import { useGlobalStore } from "@/libs/zustand/StoreProvider";
import { Col, Form, Input, InputNumber, Row, Select, Typography } from "antd";
import { useEffect } from "react";
import type { FormPurchaseItemFields as FormFields } from "../../type";

const initialValues = {
  // name: faker.person.fullName(),
  // unitPrice: 100,
  // quantity: 2,
  // uomId: "1|bh",
  remarks: " ",
};

interface Props {
  closeModal: () => void;
  idEdit: string | null;
}

function FormModal({ closeModal, idEdit }: Props) {
  const [form] = Form.useForm();
  const { api } = useAntdContext();
  const {
    loading,
    data: { inventory },
  } = useData(["master_inventory"]);

  const inventoryOpts = inventory?.map((opt) => ({
    label: `${opt.name} (${opt.code})`,
    value: opt.id,
  }));

  const { setPurchaseRequestItem, purchaseRequestItem } = useGlobalStore(
    (state: any) => state,
  );

  const onFinish = async (values: FormFields): Promise<void> => {
    const isExist = purchaseRequestItem.find(
      (row: any) => row.inventoryId === values.inventoryId,
    );

    if (isExist) {
      api?.error(notifStoreError("Item already exist"));
      return;
    }

    const name = inventory?.find(
      (row) => row.id === Number(values.inventoryId),
    ).name;

    setPurchaseRequestItem("create", { ...values, name });
    closeModal();
  };

  const fetchDataEdit = async () => {
    const dataEdit = purchaseRequestItem.find((row: any) => {
      return idEdit === row.id;
    });

    form.setFieldsValue(dataEdit);
  };

  useEffect(() => {
    if (idEdit) {
      void fetchDataEdit();
    }
  }, []);

  return (
    <div>
      {loading && <LoadingModule />}
      <Form
        disabled={loading}
        style={{ display: loading ? "none" : "" }}
        name="purchaseItem"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ ...initialValues }}
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
              <Select loading={loading} options={inventoryOpts} />
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

export default FormModal;
