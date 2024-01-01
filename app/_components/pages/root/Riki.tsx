"use client";

import { useStore } from "@/libs/zustand";
import React, { useState } from "react";

function Riki() {
  const notif = useStore((store) => store.notif)!;

  const shownotif = () => {
    notif.info({
      message: `Notification `,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nostrum harum  cupiditate non. Dignissimos reiciendis consequuntur veritatis rerum quos commodi, aut aliquam maiores quae enim?",
    });
  };

  return (
    <div>
      <h1>{"rick"}</h1>

      <br />
      <button onClick={shownotif}>show notif</button>
      <br />
      <br />
    </div>
  );
}

export default Riki;
