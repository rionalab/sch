"use client";

import useStore from "@/hooks/useStore";
import { useBoundStore } from "@/libs/zustand";
import React from "react";
import { Layout, Menu, Button, theme, notification } from "antd";

function Bear() {
  const store = useStore(useBoundStore, (state) => state);

  return (
    <div>
      <h1>Bear : {store?.bears}</h1>

      <br />
      <button onClick={() => store?.addBear?.()}>+ add bear</button>
      <br />
      <br />
    </div>
  );
}

export default Bear;
