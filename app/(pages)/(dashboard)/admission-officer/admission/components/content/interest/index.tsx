import { s } from "@/libs/helpers";
import { UserOutlined } from "@ant-design/icons";
import { Descriptions, type DescriptionsProps } from "antd";
import type { StudentRegistrationActivities } from "../../../type";

function Interest({ data }: { data: StudentRegistrationActivities }) {
  const detailInterest: DescriptionsProps["items"] = [
    {
      key: "arts",
      label: "Arts",
      children: data.arts,
    },
    {
      key: "music",
      label: "Music",
      children: data.music,
    },
    {
      key: "cognitive",
      label: "cognitive",
      children: data.cognitive,
    },
    {
      key: "sport",
      label: "sport",
      children: data.sport,
    },
    {
      key: "organization",
      label: "organization",
      children: data.organization,
    },
    {
      key: "others",
      label: "others",
      children: data.others,
    },
  ];

  const detailEducation: DescriptionsProps["items"] = [
    {
      key: "preschoolName",
      label: "Pre School Name",
      children: s(data.preschoolName),
    },
    {
      key: "preschoolyear",
      label: "Pre School Year",
      children: s(data.preschoolyear),
    },
    {
      key: "preschooladdress",
      label: "Pre School Address",
      children: s(data.preschoolAddress),
    },
    {
      key: "primaryschoolName",
      label: "Primary School Name",
      children: s(data.primaryName),
    },
    {
      key: "primaryschoolyear",
      label: "Primary School Year",
      children: s(data.primaryyear),
    },
    {
      key: "primaryschooladdress",
      label: "Primary School Address",
      children: s(data.primaryAddress),
    },
    {
      key: "otherName",
      label: "Others School Name",
      children: s(data.othersName),
    },
    {
      key: "otheryear",
      label: "Others School Year",
      children: s(data.othersyear),
    },
    {
      key: "otheraddress",
      label: "Others School Address",
      children: s(data.othersAddress),
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
            Child Talent / Interest
          </>
        }
        items={detailInterest}
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
            Child Background Education
          </>
        }
        items={detailEducation}
      />
    </div>
  );
}

export default Interest;
