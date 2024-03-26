"use client";

import React, { memo, useEffect, useState } from "react";
import { Col, Tree, Form, Input, Row, Select } from "antd";
import { type FormFields } from "../../type";
import { ButtonForm, LoadingModule } from "@/c";
import { store, show } from "../../action";
import { useParams, useRouter } from "next/navigation";
import {
  notifStoreSuccess,
  notifStoreError,
  notifUpdateSuccess,
  notifUpdateError,
  userTypeOptions,
} from "@/consts";
import { useAntdContext } from "@/contexts";
import { fieldRules } from "@/libs/helpers";
import { faker } from "@faker-js/faker";
import type { TreeDataNode, TreeProps } from "antd";

const initialValues = {
  roleAccess: userTypeOptions[0].value,
  email: faker.internet.email(),
  actions:
    "menu_master, menu_department, master_supplier, master_department, create_department, menu_superadmin, menu_role",
  active: true,
};

const defineRole = ({
  label,
  action = "CRUD",
}: {
  label: string;
  action: string;
}) => {
  const hasCreate = action.includes("C");
  const hasRead = action.includes("R");
  const hasUpdate = action.includes("U");
  const hasDelete = action.includes("D");

  return {
    title: `Menu ${label}`,
    key: `menu_master_${label}`,
    children: [
      ...(hasCreate
        ? [
            {
              title: `Create`,
              key: `menu_master_${label}_create`,
            },
          ]
        : [{}]),

      ...(hasUpdate
        ? [
            {
              title: `Create`,
              key: `menu_master_${label}_edit`,
            },
          ]
        : [{}]),

      {
        title: `Edit`,
        key: `menu_master_${label}_edit`,
      },
      {
        title: `Delete`,
        key: `menu_master_${label}_delete`,
      },
    ],
  };
};

const treeData: TreeDataNode[] = [
  {
    title: "Menu Master",
    key: "menu_master",
    children: [
      {
        title: "Menu Supplier",
        key: "menu_master_supplier",
        children: [
          {
            title: "Create",
            key: "menu_master_supplier_create",
          },
          {
            title: "Edit",
            key: "menu_master_supplier_edit",
          },
          {
            title: "Delete",
            key: "menu_master_supplier_delete",
          },
        ],
      },
      {
        title: "Menu UOM",
        key: "menu_master_uom",
      },
      {
        title: "Menu inventory",
        key: "menu_master_inventory",
      },
    ],
  },
];

function FormVendor() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { api } = useAntdContext();
  const { id } = useParams();
  const [form] = Form.useForm();
  const [loadingEdit, setLoadingEdit] = useState(false);

  const onFinish = async (values: FormFields): Promise<void> => {
    const isEdit = values.id;

    try {
      setLoading(true);

      await store(values);

      api?.success(isEdit ? notifUpdateSuccess() : notifStoreSuccess());
      router.back();
    } catch (e: any) {
      const msg = String(e.message);

      api?.error(isEdit ? notifUpdateError(msg) : notifStoreError(msg));
    } finally {
      setLoading(false);
    }
  };

  const fetchDataEdit = async () => {
    setLoadingEdit(true);
    const dataEdit = await show(Number(id));
    form.setFieldsValue(dataEdit);
    setLoadingEdit(false);
  };

  const onSelect: TreeProps["onSelect"] = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };

  const onCheck: TreeProps["onCheck"] = (checkedKeys, info) => {
    console.log("onCheck", checkedKeys, info);
  };

  useEffect(() => {
    if (id) {
      void fetchDataEdit();
    }
  }, []);

  return (
    <div>
      {loadingEdit && <LoadingModule />}
      <Form
        name="basic"
        className={loadingEdit ? "dNone" : ""}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ ...initialValues, id }}
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onFinish={onFinish}
        form={form}
        autoComplete="off"
      >
        <br />
        <Row gutter={24}>
          <Col span={11}>
            <Form.Item<FormFields> hidden label="Id" name="id">
              <Input type="hidden" />
            </Form.Item>

            <Form.Item<FormFields>
              label="Label"
              name="label"
              rules={fieldRules(["required"])}
            >
              <Input />
            </Form.Item>

            <Form.Item<FormFields>
              label="Role Name"
              name="name"
              rules={fieldRules(["required"])}
            >
              <Select options={userTypeOptions} />
            </Form.Item>

            <Form.Item<FormFields>
              label="Actions"
              name="actions"
              rules={fieldRules(["required"])}
            >
              <Input.TextArea />
            </Form.Item>

            <Form.Item<FormFields> label="Description" name="description">
              <Input.TextArea />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Tree
              checkable
              defaultExpandedKeys={["0-0-0", "0-0-1"]}
              defaultSelectedKeys={["0-0-0", "0-0-1"]}
              defaultCheckedKeys={["0-0-0", "0-0-1"]}
              onSelect={onSelect}
              onCheck={onCheck}
              treeData={treeData}
            />
          </Col>
        </Row>

        <ButtonForm loading={loading} />
      </Form>
    </div>
  );
}

export default memo(FormVendor);
