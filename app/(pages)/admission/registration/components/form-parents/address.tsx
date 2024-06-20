import React from "react";
import { religionOptions } from "@/consts";
import Fields, { Items } from "./fields";

function FormParentAddress() {
  const items: Items[] = [
    {
      label: "City",
      name: "city",
    },
    {
      label: "Postal Code",
      name: "postalCode",
    },
  ];

  return <Fields items={items} title="Address Information" />;
}

export default FormParentAddress;
