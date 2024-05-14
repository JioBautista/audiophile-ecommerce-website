import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const linkStyles = {
    className: "text-white mx-5",
  };
  return (
    <div className="bg-black">
      <div className="container mx-auto p-5 flex items-center justify-between md:px-8">
        <img
          src="src/assets/mobile-menu-icon-white.svg"
          className="w-6 lg:hidden"
        />
        <h1 className="text-white font-bold text-3xl md:grow md:ml-8 lg:ml-0">
          audiophile
        </h1>
        <div className="hidden lg:block lg:grow">
          <Link {...linkStyles}>HOME</Link>
          <Link {...linkStyles}>HEADPHONES</Link>
          <Link {...linkStyles}>SPEAKERS</Link>
          <Link {...linkStyles}>EARPHONES</Link>
        </div>
        <img src="src/assets/cart-icon-white.png" className="w-8" />
      </div>
    </div>
  );
}

export default NavBar;
