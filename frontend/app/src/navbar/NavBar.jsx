import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = React.useState(true);

  const linkStyles = {
    className:
      "text-white mx-5 hover:text-orange-700 font-medium tracking-widest",
  };

  const cardStyles = {
    className: "bg-gray-200 p-2 max-w-96 w-full",
  };

  function openMobileMenu() {
    setIsOpen(!isOpen);
  }
  console.log(isOpen);
  return (
    <>
      <div className="bg-black relative">
        <div className="container mx-auto p-5 flex items-center justify-between md:px-8">
          <img
            src="src/assets/mobile-menu-icon-white.svg"
            className="w-8 lg:hidden cursor-pointer"
            onClick={openMobileMenu}
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
          <img
            src="src/assets/cart-icon-white.png"
            className="w-8 cursor-pointer"
          />
        </div>
        {isOpen && (
          <>
            <div className="absolute right-0 left-0 ">
              <div className="flex flex-col md:flex-row py-10 px-5 lg:px-10 justify-center items-center gap-2">
                <div {...cardStyles}>
                  <img src="src/assets/shared/mobile/image-xx99-mark-one-headphones.jpg" />
                  <h2>HEADPHONES</h2>
                  <Link>SHOP</Link>
                </div>

                <div {...cardStyles}>
                  <h2>SPEAKERS</h2>
                  <Link>SHOP</Link>
                </div>

                <div {...cardStyles}>
                  <h2>EARPHONES</h2>
                  <Link>SHOP</Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default NavBar;
