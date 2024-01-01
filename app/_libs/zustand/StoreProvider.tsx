"use client";

import { type PropsWithChildren, useRef } from "react";
import type { StoreType } from "./";
import { initializeStore, Provider } from "./";
import { notification } from "antd";

const StoreProvider = ({ children, ...props }: PropsWithChildren) => {
  const storeRef = useRef<StoreType>();
  const [api, contextHolder] = notification.useNotification();

  if (!storeRef.current) {
    storeRef.current = initializeStore({ ...props, notif: api });
  }

  return (
    <Provider value={storeRef.current}>
      {contextHolder}
      {children}
    </Provider>
  );
};

export default StoreProvider;
