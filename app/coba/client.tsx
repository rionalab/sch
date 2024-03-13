/* eslint-disable @typescript-eslint/consistent-type-definitions */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
"use client";

import React from "react";
import Fish from "./fishes";
import UploadDemo from "./upload";
// import Bears from "./bears";

function Client() {
  return (
    <div>
      <Fish />
      {/* <Bears /> */}
      <UploadDemo />
    </div>
  );
}

export default Client;
