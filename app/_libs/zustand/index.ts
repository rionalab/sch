import { create, createStore } from "zustand";
import { createFishSlice } from "./slices/fishSlice";
import { createBearSlice } from "./slices/bearSlice";
import { createUserSlice } from "./slices/userSlice";
import type { CombinedSlicesType } from "@/types";

// export const useBoundStore = create<CombinedSlicesType>((...a) => ({
//   ...createFishSlice(...a),
//   ...createBearSlice(...a),
//   ...createUserSlice(...a),
// }));

export interface StoreState {
  count: number;
}

export interface StoreActions {
  decrementCount: () => void;
  incrementCount: () => void;
}

export type GlobalStore = StoreState & StoreActions;

export const initGlobalStore = (): StoreState => {
  return { count: new Date().getFullYear() };
};

export const defaultInitState: GlobalStore = {
  count: 0,
  decrementCount: () => null,
  incrementCount: () => null,
};

export const useBoundStore = (initState: GlobalStore = defaultInitState) => {
  return createStore<GlobalStore>()((set) => ({
    ...initState,
    decrementCount: () => {
      set((state) => ({ count: state.count - 1 }));
    },
    incrementCount: () => {
      set((state) => ({ count: state.count + 1 }));
    },
  }));
};
