"use client";

import useStore from "@/hooks/useStore";
import { useBoundStore } from "@/libs/zustand";
import React from "react";
import { Layout, Menu, Button, theme, notification } from "antd";

function Bear() {
  const store = useStore(useBoundStore, (state) => state);
  const [api, contextHolder] = notification.useNotification();
  const shownotif = () => {
    console.log(123);
    api.info({
      message: `Notification `,
      description: "asd adsd  asasdsadasdasdasd",
    });
  };

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
