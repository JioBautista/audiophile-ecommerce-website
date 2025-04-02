import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { useStore } from "../store/useStore";

function MobileMenu() {
  const { toggleMobileMenu, mobileMenu } = useStore((state) => ({
    toggleMobileMenu: state.toggleMobileMenu,
    mobileMenu: state.mobileMenu,
  }));
  const cardStyles = {
    className: "bg-zinc-100 w-full rounded-md p-5 text-center",
  };

  const textStyles = {
    className: "tracking-widest font-semibold mb-5",
  };

  const imgStyles = {
    className: "mx-auto mb-3",
  };

  return (
    <>
      <Container>
        <div className="flex flex-col  items-center justify-between  gap-10 px-5 py-10 md:flex-row">
          <div {...cardStyles}>
            <img src="/assets/headphones-mobile-img.png" {...imgStyles} />
            <h2 {...textStyles}>HEADPHONES</h2>
            <div
              className="flex items-center justify-center gap-3"
              onClick={() => mobileMenu && toggleMobileMenu()}
            >
              <Link
                className="tracking-widest text-gray-500 hover:text-orange-500"
                to="/category/?category=headphones"
                reloadDocument
              >
                SHOP
              </Link>
              <img src="/assets/shared/desktop/icon-arrow-right.svg" />
            </div>
          </div>

          <div {...cardStyles}>
            <img src="/assets/speakers-mobile-img.png" {...imgStyles} />
            <h2 {...textStyles}>SPEAKERS</h2>
            <div
              className="flex items-center justify-center gap-3"
              onClick={() => mobileMenu && toggleMobileMenu()}
            >
              <Link
                className="tracking-widest text-gray-500 hover:text-orange-500"
                to="/category/?category=speakers"
                reloadDocument
              >
                SHOP
              </Link>
              <img src="/assets/shared/desktop/icon-arrow-right.svg" />
            </div>
          </div>

          <div {...cardStyles}>
            <img src="/assets/earphones-mobile-img.png" {...imgStyles} />
            <h2 {...textStyles}>EARPHONES</h2>
            <div
              className="flex items-center justify-center gap-3"
              onClick={() => mobileMenu && toggleMobileMenu()}
            >
              <Link
                className="tracking-widest text-gray-500 hover:text-orange-500"
                to="/category/?category=earphones"
                reloadDocument
              >
                SHOP
              </Link>
              <img src="/assets/shared/desktop/icon-arrow-right.svg" />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default MobileMenu;
