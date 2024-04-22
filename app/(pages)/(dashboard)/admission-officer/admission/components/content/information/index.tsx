import { s } from "@/libs/helpers";
import { UserOutlined } from "@ant-design/icons";
import { Descriptions, DescriptionsProps } from "antd";
import { type StudentRegistrationInformation } from "../../../type";

function Information({ data }: { data: StudentRegistrationInformation }) {
  const detailInterest: DescriptionsProps["items"] = [
    {
      key: "act1",
      label: "Activities 1",
      children: s(data.typeActivities1),
    },
    {
      key: "act2",
      label: "Location",
      children: s(data.locationActivities1),
    },
    {
      key: "act3",
      label: "Time / Session",
      children: s(data.timeActivities1),
    },
    {
      key: "act4",
      label: "Start - End Year",
      children: s(data.startEndActivities1),
    },
    {
      key: "act11",
      label: "Activities 2",
      children: s(data.typeActivities2),
    },
    {
      key: "act22",
      label: "Location",
      children: s(data.locationActivities2),
    },
    {
      key: "act33",
      label: "Time / Session",
      children: s(data.timeActivities2),
    },
    {
      key: "act44",
      label: "Start - End Year",
      children: s(data.startEndActivities2),
    },

    {
      key: "act111",
      label: "Activities 3",
      children: s(data.typeActivities3),
    },
    {
      key: "act222",
      label: "Location",
      children: s(data.locationActivities3),
    },
    {
      key: "act334",
      label: "Time / Session",
      children: s(data.timeActivities3),
    },
    {
      key: "act444",
      label: "Start - End Year",
      children: s(data.startEndActivities3),
    },
  ];

  const personLiveWiths: DescriptionsProps["items"] = [
    {
      key: "1",
      label: "Full Name 1",
      children: s(data.personLiveWithName1),
    },
    {
      key: "2",
      label: "Relation",
      children: s(data.personLiveWithRelation1),
    },
    {
      key: "3",
      label: "Address",
      children: s(data.personLiveWithAddress1),
    },
    {
      key: "4",
      label: "Phone",
      children: s(data.personLiveWithPhone1),
    },
    {
      key: "5",
      label: "Email",
      children: s(data.personLiveWithEmail1),
    },

    {
      key: "11",
      label: "Full Name 2",
      children: s(data.personLiveWithName2),
    },
    {
      key: "21",
      label: "Relation",
      children: s(data.personLiveWithRelation2),
    },
    {
      key: "13",
      label: "Address",
      children: s(data.personLiveWithAddress2),
    },
    {
      key: "14",
      label: "Phone",
      children: s(data.personLiveWithPhone2),
    },
    {
      key: "15",
      label: "Email",
      children: s(data.personLiveWithEmail2),
    },

    {
      key: "111",
      label: "Full Name 3",
      children: s(data.personLiveWithName3),
    },
    {
      key: "211",
      label: "Relation",
      children: s(data.personLiveWithRelation3),
    },
    {
      key: "131",
      label: "Address",
      children: s(data.personLiveWithAddress3),
    },
    {
      key: "114",
      label: "Phone",
      children: s(data.personLiveWithPhone3),
    },
    {
      key: "115",
      label: "Email",
      children: s(data.personLiveWithEmail3),
    },
  ];

  return (
    <div>
      <Descriptions
        layout="vertical"
        column={4}
        className="customLabel"
        title={
          <>
            <UserOutlined className="mr4" />
            Child Non-Formal Education Background/Extraculiculer Activities
          </>
        }
        items={detailInterest}
      />
      <br />
      <br />

      <Descriptions
        layout="vertical"
        column={5}
        className="customLabel"
        title={
          <>
            <UserOutlined className="mr4" />
            Person(s) Live with the Child
          </>
        }
        items={personLiveWiths}
      />
    </div>
  );
}

export default Information;
