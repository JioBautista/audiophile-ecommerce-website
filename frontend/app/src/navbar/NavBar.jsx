import React from "react";
import Category from "./Category";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { useStore } from "../store/useStore";

function NavBar() {
  const { toggleCart } = useStore((state) => ({
    toggleCart: state.toggleCart,
  }));
  const [isMobileMenuOpen, setIsOpen] = React.useState(false);

  const linkStyles = {
    className:
      "text-white mx-5 hover:text-orange-700 font-medium tracking-widest",
  };

  function openMobileMenu() {
    setIsOpen(!isMobileMenuOpen);
  }

  return (
    <>
      <div className="relative bg-black">
        <Container styles={"p-5 flex items-center justify-between md:px-8"}>
          <img
            src="/src/assets/mobile-menu-icon-white.svg"
            className="w-8 cursor-pointer lg:hidden"
            onClick={openMobileMenu}
          />
          <h1 className="text-3xl font-bold text-white md:ml-8 md:grow lg:ml-0">
            audiophile
          </h1>
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
          <img
            src="/src/assets/cart-icon-white.png"
            alt="cart-icon"
            className="w-8 cursor-pointer"
            onClick={() => toggleCart()}
          />
        </Container>
        {isMobileMenuOpen && (
          <>
            <div className="bg-white">
              <Category />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default NavBar;
