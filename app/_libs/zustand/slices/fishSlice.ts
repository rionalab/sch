import type { FishSlice, CombinedSlicesType } from "@/types";
import type { StateCreator } from "zustand";

export const createFishSlice: StateCreator<
  CombinedSlicesType,
  [],
  [],
  FishSlice
> = (set) => ({
  fishes: 220,
  addFish: () => {
    set((state) => ({ fishes: state.fishes + 1 }));
  },
});
