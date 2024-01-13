"use client";

import { Flex } from "antd";
import { Bear, Andika, Fish, Riki } from "@/c";
import { useEffect } from "react";
import { useStore } from "@/libs/zustand";

export default function Home(props: any) {
  const setNotif = useStore((store) => store.setNotif);

  useEffect(() => {}, []);

  return (
    <>
      <Flex gap={200}>
        <Riki />
        <Andika />
        <Bear />
        <Fish />
      </Flex>
    </>
  );
}
