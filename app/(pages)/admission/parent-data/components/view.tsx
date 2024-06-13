import { UserOutlined } from "@ant-design/icons";
import { Button, Col, Descriptions, Row, type DescriptionsProps } from "antd";

function view({ data, setEdit }: any) {
  const detail = JSON.parse(data.data);

  const itemsMother: DescriptionsProps["items"] = [
    {
      key: "fullName_father",
      label: "Father's Name",
      children: detail.fatherName,
    },
    {
      key: "fullName_mother",
      label: "Mother's Name",
      children: detail.motherName,
    },
    {
      key: "contact",
      label: "Contact Number",
      children: detail.contactNumber,
    },
    {
      key: "email",
      label: "Email",
      children: detail.email,
    },
    {
      key: "address",
      label: "Address",
      children: detail.address,
    },
  ];

  return (
    <div>
      <Descriptions
        column={1}
        title={
          <>
            <UserOutlined className="mr4" />
            Parent Information
          </>
        }
        items={itemsMother}
      />

      <br />

      <button
        onClick={() => {
          setEdit(true);
        }}
        className="custom yellow"
      >
        Update
      </button>
    </div>
  );
}

export default view;
