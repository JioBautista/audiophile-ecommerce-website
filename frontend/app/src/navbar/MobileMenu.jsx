import React from "react";
import { Link } from "react-router-dom";

function MobileMenu() {
  const cardStyles = {
    className: "bg-zinc-100 max-w-96 w-full rounded-md p-5 text-center",
  };

  const textStyles = {
    className: "tracking-widest font-semibold mb-5",
  };

  const imgStyles = {
    className: "mx-auto mb-3",
  };

  const linkStyles = {
    className: "tracking-wdiest font-semibold text-gray-500",
  };

  return (
    <>
      <div className="absolute right-0 left-0 bg-white">
        <div className="flex flex-col md:flex-row  p-10 justify-center items-center gap-10">
          <div {...cardStyles}>
            <img src="src/assets/headphones-mobile-img.png" {...imgStyles} />
            <h2 {...textStyles}>HEADPHONES</h2>
            <Link {...linkStyles}>SHOP</Link>
          </div>

          <div {...cardStyles}>
            <img src="src/assets/speakers-mobile-img.png" {...imgStyles} />
            <h2 {...textStyles}>SPEAKERS</h2>
            <Link {...linkStyles}>SHOP</Link>
          </div>

          <div {...cardStyles}>
            <img src="src/assets/earphones-mobile-img.png" {...imgStyles} />
            <h2 {...textStyles}>EARPHONES</h2>
            <Link {...linkStyles}>SHOP</Link>
          </div>
        </div>
      </div>
      <div className="bg-black/50 h-screen"></div>
    </>
  );
}

export default MobileMenu;
