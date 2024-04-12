/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/consistent-type-definitions */

import { type FormPurchaseItemFields } from "@/pages/(dashboard)/staff/purchase-request/type";
import { createStore } from "zustand/vanilla";
import { v4 as uuidv4 } from "uuid";

export type StoreState = {
  count: number;
  count2: number;
  purchaseRequestItem: FormPurchaseItemFields[];
};

export type StoreActions = {
  decrementCount: () => void;
  incrementCount: () => void;
  setPurchaseRequestItem: (
    action: "create" | "edit" | "delete" | "reset",
    payload: any,
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

        if (action === "create") {
          purchaseRequestItem = [
            ...purchaseRequestItem,
            { ...payload, id: uuidv4(), key: uuidv4() },
          ];
        } else if (action === "edit") {
          purchaseRequestItem = [];
        } else if (action === "delete") {
          purchaseRequestItem = purchaseRequestItem.filter(
            (row) => row.id !== payload,
          );
        } else if (action === "reset") {
          purchaseRequestItem = [];
        }

        return {
          purchaseRequestItem,
        };
      });
    },
  }));
};
