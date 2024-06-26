"use client";

type localStoreKey = "activePage" | "b";

export const localStore = {
  set: (key: localStoreKey, value: any) => {
    try {
      sessionStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      return false;
    }
  },
  get: (key: localStoreKey) => {
    try {
      const storedItem = sessionStorage.getItem(key);
      return storedItem ? JSON.parse(storedItem) : null;
    } catch (e) {
      return null;
    }
  },
};
