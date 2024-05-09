import type { TabsProps } from "antd";
import { Tabs } from "antd";
import {
  type StudentRegistration,
  type StudentRegistrationActivities,
  type StudentRegistrationInformation,
  type StudentRegistrationParent,
} from "../../type";
import Information from "../content/information";
import Interest from "../content/interest";
import Parent from "../content/parent";

interface Props {
  data: StudentRegistration;
}

function TableDetail({ data }: Props) {
  const dataParent = JSON.parse(
    // @ts-expect-error qqq
    data.StudentRegistrationParent.data,
  ) as StudentRegistrationParent;

  const dataIntereset = JSON.parse(
    // @ts-expect-error qqq
    data.StudentRegistrationActivities.data as string,
  ) as StudentRegistrationActivities;

  const dataInformation = JSON.parse(
    // @ts-expect-error qqq
    data.StudentRegistrationInformation.data as string,
  ) as StudentRegistrationInformation;

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Parent",
      children: <Parent data={dataParent} />,
    },
    {
      key: "2",
      label: "Child Interest & Background",
      children: <Interest data={dataIntereset} />,
    },
    {
      key: "3",
      label: "Information & Declaration",
      children: <Information data={dataInformation} />,
    },
  ];

  const onChange = () => {};

  return (
    <>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </>
  );
}

export default TableDetail;
