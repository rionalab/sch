import type { UserSlice, CombinedSlicesType } from "@/types";
import type { StateCreator } from "zustand";

export const createUserSlice: StateCreator<
  CombinedSlicesType,
  [],
  [],
  UserSlice
> = (set, get) => ({
  user: null,
});
