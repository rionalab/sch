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
import { fieldRules, removeSpaces } from "@/libs/helpers";
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
        title: "Supplier",
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
        title: "Department",
        key: "menu_master_department",
        children: [
          {
            title: "Create",
            key: "menu_master_department_create",
          },
          {
            title: "Edit",
            key: "menu_master_department_edit",
          },
          {
            title: "Delete",
            key: "menu_master_department_delete",
          },
        ],
      },
      {
        title: "UoM",
        key: "menu_master_uom",
        children: [
          {
            title: "Create",
            key: "menu_master_uom_create",
          },
          {
            title: "Edit",
            key: "menu_master_uom_edit",
          },
          {
            title: "Delete",
            key: "menu_master_uom_delete",
          },
        ],
      },
      {
        title: "Inventory",
        key: "menu_master_inventory",
        children: [
          {
            title: "Create",
            key: "menu_master_inventory_create",
          },
          {
            title: "Edit",
            key: "menu_master_inventory_edit",
          },
          {
            title: "Delete",
            key: "menu_master_inventory_delete",
          },
        ],
      },
      {
        title: "Position",
        key: "menu_master_position",
        children: [
          {
            title: "Create",
            key: "menu_master_position_create",
          },
          {
            title: "Edit",
            key: "menu_master_position_edit",
          },
          {
            title: "Delete",
            key: "menu_master_position_delete",
          },
        ],
      },
      {
        title: "Student Activities",
        key: "menu_master_studentact",
        children: [
          {
            title: "Create",
            key: "menu_master_studentact_create",
          },
          {
            title: "Edit",
            key: "menu_master_studentact_edit",
          },
          {
            title: "Delete",
            key: "menu_master_studentact_delete",
          },
        ],
      },
      {
        title: "Work Unit",
        key: "menu_master_workunit",
        children: [
          {
            title: "Create",
            key: "menu_master_workunit_create",
          },
          {
            title: "Edit",
            key: "menu_master_workunit_edit",
          },
          {
            title: "Delete",
            key: "menu_master_workunit_delete",
          },
        ],
      },
      {
        title: "Leave Type",
        key: "menu_master_leavetype",
        children: [
          {
            title: "Create",
            key: "menu_master_leavetype_create",
          },
          {
            title: "Edit",
            key: "menu_master_leavetype_edit",
          },
          {
            title: "Delete",
            key: "menu_master_leavetype_delete",
          },
        ],
      },
      {
        title: "User",
        key: "menu_master_user",
        children: [
          {
            title: "Create",
            key: "menu_master_user_create",
          },
          {
            title: "Edit",
            key: "menu_master_user_edit",
          },
          {
            title: "Delete",
            key: "menu_master_user_delete",
          },
        ],
      },
    ],
  },
  {
    title: "Human Resource",
    key: "menu_hr",
    children: [
      {
        title: "Employee",
        key: "menu_hr_employee",
        children: [
          {
            title: "Create",
            key: "menu_hr_employee_create",
          },
          {
            title: "Edit",
            key: "menu_hr_employee_edit",
          },
          {
            title: "Delete",
            key: "menu_hr_employee_delete",
          },
        ],
      },
    ],
  },
  {
    title: "Staff",
    key: "menu_staff",
    children: [
      {
        title: "Leave Request",
        key: "menu_staff_employee",
        children: [
          {
            title: "Create",
            key: "menu_staff_employee_create",
          },
          {
            title: "Edit",
            key: "menu_staff_employee_edit",
          },
          {
            title: "Delete",
            key: "menu_staff_employee_delete",
          },
        ],
      },
      {
        title: "Purchase Order",
        key: "menu_staff_po",
        children: [
          {
            title: "Create",
            key: "menu_staff_po_create",
          },
          {
            title: "Edit",
            key: "menu_staff_po_edit",
          },
          {
            title: "Delete",
            key: "menu_staff_po_delete",
          },
        ],
      },
    ],
  },
  {
    title: "Super Admin",
    key: "menu_admin",
    children: [
      {
        title: "Leave Request",
        key: "menu_admin_role",
        children: [
          {
            title: "Create",
            key: "menu_admin_role_create",
          },
          {
            title: "Edit",
            key: "menu_admin_role_edit",
          },
          {
            title: "Delete",
            key: "menu_admin_role_delete",
          },
        ],
      },
    ],
  },
  {
    title: "Account",
    key: "menu_account",
    children: [
      {
        title: "Update Password",
        key: "menu_account_password",
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
  const [checked, setChecked] = useState<string[]>([]);

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
    const dataEdit = await show(Number(id));
    const actionsInArr = removeSpaces(dataEdit?.actions).split(",");

    setLoadingEdit(true);

    form.setFieldsValue(dataEdit);
    setChecked(actionsInArr);

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

  console.log(111111, checked);

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
              autoExpandParent={true}
              showLine={true}
              // defaultExpandedKeys={["menu_master", "menu_master_supplier"]}
              // defaultSelectedKeys={["0-0-0", "0-0-1"]}
              defaultCheckedKeys={checked}
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
