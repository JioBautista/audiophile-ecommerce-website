import React from "react";
import NavBar from "./navbar/NavBar";
import AddCart from "./add-to-cart/AddCart";
import Category from "./navbar/Category";
import ScrollToTop from "./components/ScrollToTop";
import Overlay from "./components/Overlay";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";
import { useStore } from "./store/useStore";
import "animate.css";

function App() {
  const { cart, mobileMenu } = useStore((state) => ({
    cart: state.cart,
    mobileMenu: state.mobileMenu,
  }));
  return (
    <>
      <div className="relative">
        <NavBar />
        {mobileMenu && (
          <>
            <div className="animate__animated animate__slideInLeft animate__faster absolute inset-x-0 z-10 bg-white">
              <Category />
            </div>
            <Overlay mode={mobileMenu} />
          </>
        )}
        {cart && <AddCart />}
        <Outlet />
        <Footer />
      </div>
      <ScrollToTop />
    </>
  );
}

export default App;
