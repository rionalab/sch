import { createContext, useContext, useMemo } from "react";
import { notification } from "antd";
import { type NotificationInstance } from "antd/es/notification/interface";

interface Antd {
  api: NotificationInstance | null;
}

export const antdContext = createContext<Antd>({
  api: null,
});

export const Provider = antdContext.Provider;

export const useAntdContext = () => {
  const antdContextExist = useContext(antdContext);

  if (!antdContextExist) {
    throw new Error("Outside AntdProvider");
  }

  return antdContextExist;
};

export const AntdProvider = ({ children }: { children: React.ReactNode }) => {
  const [api, contextHolder] = notification.useNotification();

  const value = useMemo(() => ({ api }), []);

  return (
    <Provider value={value}>
      {contextHolder}
      {children}
    </Provider>
  );
};
