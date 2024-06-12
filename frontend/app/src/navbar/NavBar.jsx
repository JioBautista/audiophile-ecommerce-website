import React from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { useStore } from "../store/useStore";
import "animate.css";

function NavBar() {
  const { toggleCart, toggleMobileMenu } = useStore((state) => ({
    toggleCart: state.toggleCart,
    toggleMobileMenu: state.toggleMobileMenu,
  }));

  const linkStyles = {
    className:
      "text-white mx-5 hover:text-orange-700 font-medium tracking-widest",
  };

  const shoppingCart = JSON.parse(sessionStorage.getItem("shoppingCart"));
  return (
    <>
      <div className="relative bg-black">
        <Container styles={"p-5 flex items-center justify-between"}>
          <img
            src="/assets/mobile-menu-icon-white.svg"
            className="w-8 cursor-pointer lg:hidden"
            onClick={() => toggleMobileMenu()}
          />
          <Link
            className="text-3xl font-bold text-white md:ml-8 md:grow lg:ml-0"
            to="/"
          >
            audiophile
          </Link>
          <div className="hidden lg:block lg:grow">
            <Link {...linkStyles} to="/">
              HOME
            </Link>
            <Link {...linkStyles} to="/category/headphones">
              HEADPHONES
            </Link>
            <Link {...linkStyles} to="/category/speakers">
              SPEAKERS
            </Link>
            <Link {...linkStyles} to="/category/earphones">
              EARPHONES
            </Link>
          </div>

          <div className="relative">
            <img
              src="/assets/cart-icon-white.png"
              alt="cart-icon"
              className="w-8 cursor-pointer"
              onClick={() => toggleCart()}
            />
            <div className="absolute -top-3 left-5 w-[25px] rounded-full bg-orange-500 p-1 text-center text-white">
              <p className="text-sm">
                {shoppingCart ? shoppingCart.length : 0}
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default NavBar;
