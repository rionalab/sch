import { CombinedSlicesType, BearSlice } from "@/types/zustand";
import { StateCreator } from "zustand";

export const createBearSlice: StateCreator<
  CombinedSlicesType,
  [],
  [],
  BearSlice
> = (set, get) => ({
  bears: 110,
  addBear: () => set({ bears: get().bears + 1 }),
});
