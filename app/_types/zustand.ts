export interface FishSlice {
  fishes: number;
  addFish: () => void;
}

export interface BearSlice {
  bears: number;
  addBear: () => void;
}

interface User {
  name: string;
}

export interface UserSlice {
  user: null | User;
}

export type CombinedSlicesType = UserSlice & FishSlice & BearSlice;
