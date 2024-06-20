import { s } from "@/libs/helpers";
import { UserOutlined } from "@ant-design/icons";
import { Descriptions, type DescriptionsProps } from "antd";
import type { StudentRegistrationActivities } from "../../../type";

function ChildDetailForModal({ row: datax }: any) {
  console.clear();
  console.log(555, { datax });

  const data = JSON.parse(datax.data.studentRegistration1);
  console.log(666, data);

  const generalInfo: DescriptionsProps["items"] = [
    {
      key: "regisDate",
      label: "Register Date",
      children: data.regisDate,
    },
    {
      key: "unit",
      label: "Unit",
      children: data.unit,
    },
    {
      key: "specialNeeds",
      label: "Special needs",
      children: s(data.specialNeeds),
    },
    {
      key: "RegStatus",
      label: "Registration Type",
      children: s(data.status),
    },
  ];

  const personal: DescriptionsProps["items"] = [
    {
      key: "fullName",
      label: "Full Name",
      children: s(data.fullName),
    },
    {
      key: "placeOfBirth",
      label: "Place of Birth",
      children: s(data.placeOfBirth),
    },
    {
      key: "religion",
      label: "Religion",
      children: s(data.religion),
    },
    {
      key: "houseAddress",
      label: "House Address",
      children: s(data.houseAddress),
    },

    {
      key: "city",
      label: "City",
      children: s(data.city),
    },
    {
      key: "nationality",
      label: "Nationality",
      children: s(data.nationality),
    },
    {
      key: "nationality",
      label: "Nationality",
      children: s(data.nationality),
    },
    {
      key: "dob",
      label: "DoB",
      children: s(data.dob),
    },
    {
      key: "birthOrder",
      label: "Birth Order",
      children: s(data.birthOrder),
    },
    {
      key: "totalChild",
      label: "Total Child",
      children: s(data.totalChild),
    },
    {
      key: "langs",
      label: "Langs",
      children: s(data.languages),
    },
  ];

  const parent: DescriptionsProps["items"] = [
    {
      key: "frwc",
      label: "Father Relationship With Child",
      children: s(data.fatherRelationshipWithChild),
    },
    {
      key: "mrwc",
      label: "Mother Relationship With Child",
      children: s(data.motherRelationshipWithChild),
    },
  ];

  const talent: DescriptionsProps["items"] = [
    {
      key: "arts",
      label: "Arts",
      children: s(data.arts),
    },
    {
      key: "sport",
      label: "Sport",
      children: s(data.sport),
    },
    {
      key: "music",
      label: "Music",
      children: s(data.music),
    },
    {
      key: "organization",
      label: "Organization",
      children: s(data.organization),
    },
    {
      key: "cognitive",
      label: "Cognitive",
      children: s(data.cognitive),
    },
    {
      key: "others",
      label: "Others",
      children: s(data.others),
    },
  ];

  const backEducation: DescriptionsProps["items"] = [
    {
      key: "prevSchname",
      label: "Previous School Name",
      children: s(data.previousSchoolName),
    },
    {
      key: "previousSchoolType",
      label: "Type",
      children: s(data.previousSchoolType),
    },
    {
      key: "previousSchoolYear",
      label: "Year",
      children: s(data.previousSchoolYear),
    },
    {
      key: "previousSchoolCity",
      label: "City",
      children: s(data.previousSchoolCity),
    },
    {
      key: "previousSchoolAddress",
      label: "Address",
      children: s(data.previousSchoolAddress),
    },
    {
      key: "previousSchoolRemarks",
      label: "Remarks",
      children: s(data.previousSchoolRemarks),
    },
  ];

  const informalEducation: DescriptionsProps["items"] = [
    {
      key: "typeActivities1",
      label: "Activities (1)",
      children: s(data.typeActivities1),
    },
    {
      key: "locationActivities1",
      label: "Location",
      children: s(data.locationActivities1),
    },
    {
      key: "timeActivities1",
      label: "Time",
      children: s(data.timeActivities1),
    },
    {
      key: "startEndActivities1",
      label: "Start - End Year",
      children: s(data.startEndActivities1),
    },
    {
      key: "1a",
      label: "",
      children: "",
    },
    {
      key: "1b",
      label: "",
      children: "",
    },

    {
      key: "typeActivities2",
      label: "Activities (2)",
      children: s(data.typeActivities2),
    },
    {
      key: "locationActivities2",
      label: "Location",
      children: s(data.locationActivities2),
    },
    {
      key: "timeActivities2",
      label: "Time",
      children: s(data.timeActivities2),
    },
    {
      key: "startEndActivities2",
      label: "Start - End Year",
      children: s(data.startEndActivities2),
    },
    {
      key: "2a",
      label: "",
      children: "",
    },
    {
      key: "2b",
      label: "",
      children: "",
    },

    {
      key: "typeActivities3",
      label: "Activities (3)",
      children: s(data.typeActivities3),
    },
    {
      key: "locationActivities3",
      label: "Location",
      children: s(data.locationActivities3),
    },
    {
      key: "timeActivities3",
      label: "Time",
      children: s(data.timeActivities3),
    },
    {
      key: "startEndActivities3",
      label: "Start - End Year",
      children: s(data.startEndActivities3),
    },
    {
      key: "3a",
      label: "",
      children: "",
    },
    {
      key: "3b",
      label: "",
      children: "",
    },
  ];

  const documents: DescriptionsProps["items"] = [
    {
      key: "doc1",
      label: "Photo",
      children: s(data.photo),
    },
    {
      key: "doc2",
      label: "Birth Certificate",
      children: s(data.birthCertificate),
    },
    {
      key: "doc3",
      label: "birthCertificate",
      children: s(data.birthCertificate),
    },
    {
      key: "doc4",
      label: "Family Card",
      children: s(data.familyCard),
    },
    {
      key: "doc5",
      label: "Id Card Father",
      children: s(data.idCardFather),
    },
    {
      key: "doc6",
      label: "Id Card Mother",
      children: s(data.idCardMother),
    },
  ];

  const others: DescriptionsProps["items"] = [
    {
      key: "others1",
      label: "Home Distance To School",
      children: `${s(data.distance)} KM`,
    },

    {
      key: "others2",
      label: "Going To School By",
      children: s(data.goingToShoolBy),
    },
  ];

  return (
    <div>
      <Descriptions
        layout="vertical"
        column={3}
        className="customLabel"
        title={
          <>
            <UserOutlined className="mr4" />
            General Information
          </>
        }
        items={generalInfo}
      />

      <br />
      <br />

      <Descriptions
        layout="vertical"
        column={3}
        className="customLabel"
        title={
          <>
            <UserOutlined className="mr4" />
            Personal Information
          </>
        }
        items={personal}
      />

      <br />
      <br />

      <Descriptions
        layout="vertical"
        column={3}
        className="customLabel"
        title={
          <>
            <UserOutlined className="mr4" />
            Parent Information
          </>
        }
        items={parent}
      />

      <br />
      <br />

      <Descriptions
        layout="vertical"
        column={3}
        className="customLabel"
        title={
          <>
            <UserOutlined className="mr4" />
            Child Talent/Interest Information
          </>
        }
        items={talent}
      />
      <br />
      <br />

      <Descriptions
        layout="vertical"
        column={3}
        className="customLabel"
        title={
          <>
            <UserOutlined className="mr4" />
            Background Education Information
          </>
        }
        items={backEducation}
      />

      <br />
      <br />

      <Descriptions
        layout="vertical"
        column={3}
        className="customLabel"
        title={
          <>
            <UserOutlined className="mr4" />
            Informal Education Information
          </>
        }
        items={informalEducation}
      />

      <br />
      <br />

      <Descriptions
        layout="vertical"
        column={3}
        className="customLabel"
        title={
          <>
            <UserOutlined className="mr4" />
            Documents Information
          </>
        }
        items={documents}
      />

      <br />
      <br />

      <Descriptions
        layout="vertical"
        column={3}
        className="customLabel"
        title={
          <>
            <UserOutlined className="mr4" />
            Others Information
          </>
        }
        items={others}
      />
    </div>
  );
}

export default ChildDetailForModal;
