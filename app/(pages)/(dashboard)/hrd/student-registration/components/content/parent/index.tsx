import { UserOutlined } from "@ant-design/icons";
import { Col, Descriptions, Row, type DescriptionsProps } from "antd";
import { type StudentRegistrationParent } from "../../../type";

function Parent({ data }: { data: StudentRegistrationParent }) {
  const itemsFather: DescriptionsProps["items"] = [
    {
      key: "fullName_father",
      label: "Full Name",
      children: data.fullName_father,
    },
    {
      key: "idType_father",
      label: "ID Type",
      children: data.idType_father,
    },
    {
      key: "idNumber_father",
      label: "ID Number",
      children: data.idNumber_father,
    },
    {
      key: "nationality_father",
      label: "Nationality",
      children: data.nationality_father,
    },
    {
      key: "religion_father",
      label: "Religion",
      children: data.religion_father,
    },
    {
      key: "placeOfBirth_father",
      label: "Place of Birth",
      children: data.placeOfBirth_father,
    },
    {
      key: "dob_father",
      label: "Date of Birth",
      children: data.dob_father,
    },
    {
      key: "lastEducation_father",
      label: "Last Education",
      children: data.lastEducation_father,
    },
    {
      key: "universityName_father",
      label: "University Name",
      children: data.universityName_father,
    },
    {
      key: "address_father",
      label: "Address",
      children: data.address_father,
    },
    {
      key: "city_father",
      label: "City",
      children: data.city_father,
    },
    {
      key: "postalCode_father",
      label: "Postal Code",
      children: data.postalCode_father,
    },
    {
      key: "phoneNumber_father",
      label: "Phone Number",
      children: data.phoneNumber_father,
    },
    {
      key: "email_father",
      label: "Email",
      children: data.email_father,
    },
    {
      key: "occupationPosition_father",
      label: "Occupation Position",
      children: data.occupationPosition_father,
    },
    {
      key: "nameInstitution_father",
      label: "Name Institution",
      children: data.nameInstitution_father,
    },
    {
      key: "officeAddress_father",
      label: "Office Address",
      children: data.officeAddress_father,
    },
    {
      key: "relationWithChild_father",
      label: "Relation with Child",
      children: data.relationWithChild_father,
    },
    {
      key: "maritalStatus_father",
      label: "Marital Status",
      children: data.maritalStatus_father,
    },
    {
      key: "theChildLivesWith_father",
      label: "The Child Lives With",
      children: data.theChildLivesWith_father,
    },
  ];

  const itemsMother: DescriptionsProps["items"] = [
    {
      key: "fullName_mother",
      label: "Full Name",
      children: data.fullName_mother,
    },
    {
      key: "idType_mother",
      label: "ID Type",
      children: data.idType_mother,
    },
    {
      key: "idNumber_mother",
      label: "ID Number",
      children: data.idNumber_mother,
    },
    {
      key: "nationality_mother",
      label: "Nationality",
      children: data.nationality_mother,
    },
    {
      key: "religion_mother",
      label: "Religion",
      children: data.religion_mother,
    },
    {
      key: "placeOfBirth_mother",
      label: "Place of Birth",
      children: data.placeOfBirth_mother,
    },
    {
      key: "dob_mother",
      label: "Date of Birth",
      children: data.dob_mother,
    },
    {
      key: "lastEducation_mother",
      label: "Last Education",
      children: data.lastEducation_mother,
    },
    {
      key: "universityName_mother",
      label: "University Name",
      children: data.universityName_mother,
    },
    {
      key: "address_mother",
      label: "Address",
      children: data.address_mother,
    },
    {
      key: "city_mother",
      label: "City",
      children: data.city_mother,
    },
    {
      key: "postalCode_mother",
      label: "Postal Code",
      children: data.postalCode_mother,
    },
    {
      key: "phoneNumber_mother",
      label: "Phone Number",
      children: data.phoneNumber_mother,
    },
    {
      key: "email_mother",
      label: "Email",
      children: data.email_mother,
    },
    {
      key: "occupationPosition_mother",
      label: "Occupation Position",
      children: data.occupationPosition_mother,
    },
    {
      key: "nameInstitution_mother",
      label: "Name Institution",
      children: data.nameInstitution_mother,
    },
    {
      key: "officeAddress_mother",
      label: "Office Address",
      children: data.officeAddress_mother,
    },
    {
      key: "relationWithChild_mother",
      label: "Relation with Child",
      children: data.relationWithChild_mother,
    },
    {
      key: "maritalStatus_mother",
      label: "Marital Status",
      children: data.maritalStatus_mother,
    },
    {
      key: "theChildLivesWith_mother",
      label: "The Child Lives With",
      children: data.theChildLivesWith_mother,
    },
  ];

  return (
    <Row gutter={16}>
      <Col span={12}>
        <Descriptions
          column={1}
          title={
            <>
              <UserOutlined className="mr4" />
              Father Information
            </>
          }
          items={itemsFather}
        />
      </Col>
      <Col span={12}>
        <Descriptions
          column={1}
          title={
            <>
              <UserOutlined className="mr4" />
              Mother Information
            </>
          }
          items={itemsMother}
        />
      </Col>
    </Row>
  );
}

export default Parent;
