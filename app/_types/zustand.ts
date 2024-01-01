export interface FishSlice {
  fishes: number;
  addFish: () => void;
}

export interface BearSlice {
  bears: number;
  addBear: () => void;
}

export type CombinedSlicesType = FishSlice & BearSlice;
