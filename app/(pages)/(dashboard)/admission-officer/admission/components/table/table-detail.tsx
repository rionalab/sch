import type { TabsProps } from "antd";
import { Tabs } from "antd";
import ChildDetailForModal from "../content/child";
import Parent from "../content/parent";
import Interview from "../content/interview";
import Assessment from "../content/assessment";

interface Props {}

function TableDetail({ data }: any) {
  console.log(2222, data);

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
  ];

  const { assessment, studentRegistration1, interview } = data.data;
  const xx = data.data;
  const { unit } = JSON.parse(studentRegistration1 ?? "{}");

  if (assessment) {
    const x = Object.keys(assessment);

    if (x.length) {
      items.push({
        key: "assessment",
        label: "Assessment",
        children: <Assessment files={assessment} />,
      });
    }
  }

  if (interview) {
    items.push({
      key: "interview",
      label: "Interview",
      children: <Interview data2={data} data={interview} />,
    });
  }

  const onChange = () => {};

  return (
    <>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </>
  );
}

export default TableDetail;
