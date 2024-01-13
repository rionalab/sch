import React from "react";
import { Employee } from "../type";
import type { DescriptionsProps } from "antd";
import { Descriptions } from "antd";
import { dMY } from "@/libs/helpers/date";

interface Props {
  data: Employee;
}

function TableDetail({ data }: Props) {
  const items: DescriptionsProps["items"] = [
    {
      key: "2",
      label: "Phone 2",
      children: data.phone2,
    },
    {
      key: "3",
      label: "Family Phone",
      children: data.familyPhone,
    },
    {
      key: "5",
      label: "Address",
      children: `${data.address}, ${data.zipCode}`,
    },
    {
      key: "6",
      label: "Remark",
      children: data.remarks,
    },
    {
      key: "7",
      label: "Created at",
      children: dMY(data.createdAt),
    },
    {
      key: "8",
      label: "Updated at",
      children: dMY(data.updatedAt),
    },
  ];

  return (
    <div style={{ width: 500 }}>
      <Descriptions column={2} title="Employee Info" items={items} />
    </div>
  );
}

export default TableDetail;
