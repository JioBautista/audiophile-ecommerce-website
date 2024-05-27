import React from "react";
import NavBar from "./navbar/NavBar";
import AddCart from "./add-to-cart/AddCart";
import Overlay from "./components/Overlay";
import Footer from "./footer/Footer";
import EndContent from "./footer/EndContent";
import { Outlet } from "react-router-dom";
import { useStore } from "./store/useStore";

function App() {
  const { cart } = useStore((state) => ({ cart: state.cart }));
  return (
    <div className="relative">
      <NavBar />
      {cart && <AddCart />}
      <Outlet />
      <EndContent />
      <Footer />
    </div>
  );
}

export default App;
