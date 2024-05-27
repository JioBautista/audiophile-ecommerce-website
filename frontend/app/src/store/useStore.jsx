import { create } from "zustand";

export const useStore = create((set) => ({
  cart: false,
  toggleCart: () => set((state) => ({ cart: !state.cart })),
}));
