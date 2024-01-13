import React, { Suspense } from "react";
import List from "./List";
import Form from "./Form";
import Aaa from "./Aaa";
// import { index } from "./action";

async function page() {
  return (
    <div>
      <Form />
      <br />
      <br />
      <Suspense fallback="wwwwwwwwwwwwwwwwwwwwwwwwwwwwww">
        <Aaa />
      </Suspense>
    </div>
  );
}

export default page;
