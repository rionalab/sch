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
import ChildDetailForModal from "../content/child";

interface Props {

}

function TableDetail({ data }: any) {
  console.log(2222, data);
  // const dataParent = data.parentData as StudentRegistrationParent;

  // const dataIntereset = JSON.parse(
  //   // @ts-expect-error asd
  //   data.StudentRegistrationActivities.data as string,
  // ) as StudentRegistrationActivities;

  // const dataInformation = JSON.parse(
  //   // @ts-expect-error asd
  //   data.StudentRegistrationInformation.data as string,
  // ) as StudentRegistrationInformation;

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Child",
      children: <ChildDetailForModal row={data} id={data?.userId} />,
    },
    {
      key: "2",
      label: "Parent",
      children: <Parent row={data} id={data?.userId} />,
    },
    // {
    //   key: "3",
    //   label: "Child Interest & Background",
    //   children: <p>222222222</p>,
    //   // children: <Interest data={dataIntereset} />,
    // },
    // {
    //   key: "4",
    //   label: "Information & Declaration",
    //   children: <p>3333333333</p>,
    //   // children: <Information data={dataInformation} />,
    // },
  ];

  const onChange = () => {};

  return (
    <>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </>
  );
}

export default TableDetail;
