"use client";

import { ButtonForm, LoadingModule } from "@/c";
import {
  notifStoreError,
  notifStoreSuccess,
  notifUpdateError,
  notifUpdateSuccess,
  userTypeOptions,
} from "@/consts";
import { useAntdContext } from "@/contexts";
import { fieldRules, removeSpaces } from "@/libs/helpers";
import { faker } from "@faker-js/faker";
import type { TreeDataNode, TreeProps } from "antd";
import { Col, Form, Input, Row, Select, Tree } from "antd";
import { useParams, useRouter } from "next/navigation";
import { memo, useEffect, useState } from "react";
import { show, store } from "../../action";
import { type FormFields } from "../../type";

const initialValues = {
  roleAccess: userTypeOptions[0].value,
  email: faker.internet.email(),
  actions:
    "menu_master, menu_department, master_supplier, master_department, create_department, menu_superadmin, menu_role",
  active: true,
};

const crudRole = (id: string) => {
  return {
    key: "role_" + id,
    children: [
      {
        title: "View",
        key: "role_" + id + "_view",
      },
      {
        title: "Create",
        key: "role_" + id + "_create",
      },
      {
        title: "Edit",
        key: "role_" + id + "_edit",
      },
      {
        title: "Delete",
        key: "role_" + id + "_delete",
      },
    ],
  };
};

const treeData: TreeDataNode[] = [
  {
    title: "Menu Master",
    key: "role_master",
    children: [
      {
        title: "Supplier",
        ...crudRole("master_supplier"),
      },
      {
        title: "Department",
        ...crudRole("master_department"),
      },
      {
        title: "UoM",
        ...crudRole("master_uom"),
      },
      {
        title: "Inventory",
        ...crudRole("master_inventory"),
      },
      {
        title: "Position",
        ...crudRole("master_position"),
      },
      {
        title: "Student Activities",
        ...crudRole("master_student_act"),
      },
      {
        title: "Work Unit",
        ...crudRole("master_work_unit"),
      },
      {
        title: "Leave Type",
        ...crudRole("master_leave_type"),
      },
      {
        title: "User",
        ...crudRole("master_user"),
      },
    ],
  },
  {
    title: "Human Resource",
    key: "role_hr",
    children: [
      {
        title: "Employee",
        ...crudRole("hr_employee"),
      },
    ],
  },
  {
    title: "Staff",
    key: "role_staff",
    children: [
      {
        title: "Leave Request",
        ...crudRole("staff_leave_request"),
      },
      {
        title: "Purchase Order",
        ...crudRole("staff_purchase"),
      },
    ],
  },
  {
    title: "Super Admin",
    key: "role_admin",
    children: [
      {
        title: "Role",
        ...crudRole("admin_role"),
      },
    ],
  },
  {
    title: "Account",
    key: "role_account",
    children: [
      {
        title: "Update Password",
        key: "role_account_password_view",
      },
    ],
  },
];

function FormRole() {
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

      const actions = checked.filter(Boolean).join(",");

      await store({ ...values, actions });

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
    setChecked(checkedKeys as string[]);
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
              hidden
              rules={fieldRules(["required"])}
            >
              <Input.TextArea hidden />
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
              checkedKeys={checked}
              treeData={treeData}
            />
          </Col>
        </Row>

        <ButtonForm loading={loading} />
      </Form>
    </div>
  );
}

export default memo(FormRole);
