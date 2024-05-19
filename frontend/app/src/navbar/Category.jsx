import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";

function MobileMenu() {
  const cardStyles = {
    className: "bg-zinc-100 w-full rounded-md p-5 text-center",
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
      <Container>
        <div className="flex flex-col items-center  justify-between gap-10  px-5 py-10 md:flex-row">
          <div {...cardStyles}>
            <img src="/src/assets/headphones-mobile-img.png" {...imgStyles} />
            <h2 {...textStyles}>HEADPHONES</h2>
            <div className="flex items-center justify-center gap-3">
              <Link
                {...linkStyles}
                className="text-gray-500 hover:text-orange-500"
                to="/category/headphones"
              >
                SHOP
              </Link>
              <img src="/src/assets/shared/desktop/icon-arrow-right.svg" />
            </div>
          </div>

          <div {...cardStyles}>
            <img src="/src/assets/speakers-mobile-img.png" {...imgStyles} />
            <h2 {...textStyles}>SPEAKERS</h2>
            <div className="flex items-center justify-center gap-3">
              <Link
                {...linkStyles}
                className="text-gray-500 hover:text-orange-500"
                to="/category/speakers"
              >
                SHOP
              </Link>
              <img src="/src/assets/shared/desktop/icon-arrow-right.svg" />
            </div>
          </div>

          <div {...cardStyles}>
            <img src="/src/assets/earphones-mobile-img.png" {...imgStyles} />
            <h2 {...textStyles}>EARPHONES</h2>
            <div className="flex items-center justify-center gap-3">
              <Link
                {...linkStyles}
                className="text-gray-500 hover:text-orange-500"
                to="/category/earphones"
              >
                SHOP
              </Link>
              <img src="/src/assets/shared/desktop/icon-arrow-right.svg" />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default MobileMenu;
