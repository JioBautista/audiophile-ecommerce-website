import React from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-black">
      <Container
        styles={
          "px-5 py-10 bg-black text-white text-center space-y-10 md:grid md:grid-cols-2 md:grid-rows-4 md:justify-items-start md:items-center md:space-y-0 md:text-start md:px-10 md:pt-5 md:pb-14"
        }
      >
        <div>
          <h3 className="text-3xl font-bold">audiophile</h3>
        </div>

        <div className="items-center justify-center space-y-5 md:col-start-1 md:col-end-3 md:flex md:gap-5 md:space-y-0 lg:col-start-2 lg:justify-self-end">
          <Link className="block" to={"/"}>
            <p className="tracking-widest hover:text-orange-500">HOME</p>
          </Link>
          <Link className="block" to={"/category/headphones"}>
            <p className="tracking-widest hover:text-orange-500">HEADPHONES</p>
          </Link>
          <Link className="block" to={"/category/speakers"}>
            <p className="tracking-widest hover:text-orange-500">SPEAKERS</p>
          </Link>
          <Link className="block" to={"/category/earphones"}>
            <p className="tracking-widest hover:text-orange-500">EARPHONES</p>
          </Link>
        </div>

        <div className="md:col-start-1 md:col-end-3 md:row-start-3 lg:col-end-2 lg:row-start-2 lg:row-end-4">
          <p className="text-gray-500 md:pb-5">
            Audiophile is an all in one stop to fulfill your audion needs. We're
            a small team of music lovers and sound specialists who are devoted
            to help you get the most out of a personal audio. Come and visit our
            demo facility - we're open 7 days a week.
          </p>
        </div>

        <div className="md:row-start-4 md:self-end">
          <p className="text-gray-500">Copyright 2021. All Rights Reserved</p>
        </div>

        <div className="space-x-5 md:col-start-2 md:row-start-4 md:self-end md:justify-self-end lg:row-start-3">
          <img
            src="/assets/shared/desktop/icon-facebook.svg"
            className="inline cursor-pointer"
          />
          <img
            src="/assets/shared/desktop/icon-twitter.svg"
            className="inline cursor-pointer"
          />
          <img
            src="/assets/shared/desktop/icon-instagram.svg"
            className="inline cursor-pointer"
          />
        </div>
      </Container>
    </div>
  );
}

export default Footer;
