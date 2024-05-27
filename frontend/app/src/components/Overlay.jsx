import React from "react";
import { useStore } from "../store/useStore";

function Overlay({ mode }) {
  const { toggleCart, toggleMobileMenu } = useStore((state) => ({
    toggleCart: state.toggleCart,
    toggleMobileMenu: state.toggleMobileMenu,
  }));
  return (
    <div
      className="absolute inset-0  bg-black/50"
      onClick={() => (mode ? toggleMobileMenu() : toggleCart())}
    >
      Overlay
    </div>
  );
}

export default Overlay;
