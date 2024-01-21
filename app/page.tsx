"use client";

import { Flex } from "antd";
import { useEffect } from "react";
import { useStore } from "@/libs/zustand";

export default function Home(props: any) {
  const setNotif = useStore((store) => store.setNotif);

  useEffect(() => {}, []);

  return (
    <>
      <Flex gap={200}>
        <p>Hi...</p>
      </Flex>
    </>
  );
}
