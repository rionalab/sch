import React from "react";
import List from "./List";
import Form from "./Form";
import { index } from "./action";

async function page() {
  const fruits = await index();

  return (
    <div>
      <Form />
      <br />
      <br />
      <List fruits={fruits} />
    </div>
  );
}

export default page;
