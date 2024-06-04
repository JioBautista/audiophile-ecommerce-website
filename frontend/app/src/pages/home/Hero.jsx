import React from "react";
import Container from "../../components/Container";
import Button from "../../components/Button";

function Hero() {
  return (
    <div className="h-[730px] bg-hero-pattern-mbl bg-cover  bg-center bg-no-repeat md:bg-hero-pattern-tblt lg:bg-hero-pattern-dsktp">
      <Container
        styles={`text-center flex flex-col items-center justify-center h-full lg:items-start lg:text-start px-5`}
      >
        <span className="tracking-widest text-gray-400">
          N E W P R O D U C T
        </span>
        <h1 className="my-5 text-4xl font-bold tracking-widest text-white md:text-6xl lg:w-6/12">
          XX99 MARK II HEADPHONES
        </h1>
        <p className="mx-auto mb-5 w-9/12 text-gray-500 md:w-6/12 lg:mx-0 lg:w-5/12">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button
          className={
            "cursor-pointer bg-orange-500 px-8 py-3 text-white hover:bg-orange-300"
          }
        >
          SEE PRODUCT
        </button>
      </Container>
    </div>
  );
}

export default Hero;
