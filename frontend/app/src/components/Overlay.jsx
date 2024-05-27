import React from "react";
import { useStore } from "../store/useStore";

function Overlay() {
  const { toggleCart } = useStore((state) => ({
    toggleCart: state.toggleCart,
  }));
  return (
    <div className="absolute inset-0 bg-black/50" onClick={() => toggleCart()}>
      Overlay
    </div>
  );
}

export default Overlay;
