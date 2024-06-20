import React from "react";
import { religionOptions } from "@/consts";
import Fields, { Items } from "./fields";

function FormParentOthers() {
  const items: Items[] = [
    {
      label: "Last Education Title & Major",
      name: "lastEducation",
    },
    {
      label: "University Name",
      name: "universityName",
    },
    {
      label: "Name of Institution",
      name: "nameInstitution",
    },
    {
      label: "Office Address",
      name: "officeAddress",
    },

    {
      label: "Occupation Position",
      name: "occupationPosition",
    },

    {
      label: "The Child Lives With",
      name: "theChildLivesWith",
      singleField: true,
    },
  ];

  return <Fields items={items} title="Other Information" />;
}

export default FormParentOthers;
