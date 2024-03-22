/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/consistent-type-definitions */

import { type FormPurchaseItemFields } from "@/pages/(dashboard)/staff/purchase-request/type";
import { createStore } from "zustand/vanilla";

export type StoreState = {
  count: number;
  count2: number;
  purchaseRequestItem: FormPurchaseItemFields[];
};

export type StoreActions = {
  decrementCount: () => void;
  incrementCount: () => void;
  setPurchaseRequestItem: (
    action: "add" | "edit" | "remove",
    payload: any
  ) => void;
};

export type GlobalStore = StoreState & StoreActions;

export const defaultInitState: StoreState = {
  count: 0,
  count2: 20,
  purchaseRequestItem: [],
};

export const createGlobalStore = (initState: StoreState = defaultInitState) => {
  return createStore<GlobalStore>()((set) => ({
    ...initState,
    decrementCount: () => set((state) => ({ count: state.count - 1 })),
    incrementCount: () => set((state) => ({ count: state.count + 1 })),
    setPurchaseRequestItem: (action, payload) => {
      set((state) => {
        let purchaseRequestItem = state.purchaseRequestItem;

        if (action === "add") {
          purchaseRequestItem = [...purchaseRequestItem, payload];
        } else if (action === "edit") {
          purchaseRequestItem = [];
        } else {
          purchaseRequestItem = [];
        }

        return {
          purchaseRequestItem,
        };
      });
    },
  }));
};
