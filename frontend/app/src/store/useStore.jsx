import { create } from "zustand";

export const useStore = create((set) => ({
  cart: false,
  toggleCart: () => set((state) => ({ cart: !state.cart })),
  mobileMenu: false,
  toggleMobileMenu: () => set((state) => ({ mobileMenu: !state.mobileMenu })),
  flag: false,
  toggleFlag: () => set((state) => ({ flag: !state.flag })),
}));
