import React, { useEffect } from "react";
import { useStore } from "@/libs/zustand";
import { notification } from "antd";

function GlobalProvider({ children }: Props) {
  const setNotif = useStore((store) => store.setNotif);
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    setNotif(api);
  }, []);

  return (
    <>
      {contextHolder}
      {children}
    </>
  );
}

interface Props {
  children: React.ReactNode;
}

export default GlobalProvider;
