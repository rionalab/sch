"use client";

import { Flex } from "antd";
import Bear from "@/components/pages/root/Bear";
import Fish from "@/components/pages/root/Fish";

const Riki = dynamic(() => import("@/components/pages/root/Riki"), {
  loading: () => <p>loading....</p>,
});
const Andika = dynamic(() => import("@/components/pages/root/Andika"), {
  loading: () => <p>loading....</p>,
});

import { useEffect } from "react";
import { useStore } from "@/libs/zustand";
import dynamic from "next/dynamic";

export default function Home(props: any) {
  const setNotif = useStore((store) => store.setNotif);

  useEffect(() => {}, []);

  return (
    <>
      <Flex gap={200}>
        <Riki />
        <Andika />
        {/* <Bear />
        <Fish /> */}
      </Flex>
    </>
  );
}
