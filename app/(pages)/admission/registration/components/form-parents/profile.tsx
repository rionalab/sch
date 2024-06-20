import React from "react";
import { maritalStatusOptions, religionOptions } from "@/consts";
import Fields, { Items } from "./fields";

function FormParentProfile() {
  const items: Items[] = [
    {
      label: "Id Number",
      name: "idNumber",
    },
    {
      label: "Nationality",
      name: "nationality",
    },
    {
      label: "Religion",
      name: "religion",
      type: "select",
      options: religionOptions,
    },
    {
      label: "Place of Birth",
      name: "placeOfBirth",
    },
    {
      label: "Date of Birth",
      type: "datepicker",
      name: "dob",
    },
    {
      label: "Marital Status",
      name: "maritalStatus",
      type: "select",
      options: maritalStatusOptions,
    },
  ];

  return <Fields items={items} title="Profile Information" />;
}

export default FormParentProfile;
