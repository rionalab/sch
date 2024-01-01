import { createFishSlice } from "./slices/fishSlice";
import { createBearSlice } from "./slices/bearSlice";
import { CombinedSlicesType } from "@/app/_types/zustand";
import { createContext, useContext } from "react";
import { createStore, create, useStore as useZustandStore } from "zustand";
import { NotificationInstance } from "antd/es/notification/interface";
import { devtools, persist } from "zustand/middleware";

export const useBoundStore = create<CombinedSlicesType>()((...a) => ({
  ...createBearSlice(...a),
  ...createFishSlice(...a),
}));

// store biasa saja

interface StoreInterface {
  notif?: NotificationInstance;
  setNotif: (api: NotificationInstance) => void;
  age: number;
  reset: () => void;
}

const getDefaultInitialState = () => ({
  // reset val
});

export type StoreType = ReturnType<typeof initializeStore>;

const zustandContext = createContext<StoreType | null>(null);

export const Provider = zustandContext.Provider;

export const useStore = <T>(selector: (state: StoreInterface) => T) => {
  const store = useContext(zustandContext);

  if (!store) throw new Error("Store is missing the provider");

  return useZustandStore(store, selector);
};

export const initializeStore = (
  preloadedState: Partial<StoreInterface> = {}
) => {
  return createStore<StoreInterface>()(
    devtools(
      persist(
        (set, get) => {
          return {
            ...getDefaultInitialState(),
            ...preloadedState,

            age: 12,

            setNotif: (api: NotificationInstance) => {
              set({
                notif: api,
              });
            },

            reset: () => {
              set({
                // age: getDefaultInitialState().age,
              });
            },
          };
        },
        {
          name: "schStore",
        }
      )
    )
  );
};
