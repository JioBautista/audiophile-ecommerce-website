import React from "react";

function Hero() {
  return (
    <div className="bg-hero-pattern-mbl md:bg-hero-pattern-tblt lg:bg-hero-pattern-dsktp  bg-no-repeat bg-cover bg-center h-[730px]">
      <div className="container mx-auto text-center flex flex-col items-center justify-center h-full lg:items-start lg:text-start">
        <span className="text-gray-400 tracking-widest">
          N E W P R O D U C T
        </span>
        <h1 className="text-white text-4xl font-bold tracking-widest my-5 md:text-6xl lg:w-6/12">
          XX99 MARK II HEADPHONES
        </h1>
        <p className="text-gray-500 w-9/12 mx-auto mb-5 md:w-6/12 lg:mx-0 lg:w-5/12">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button className="text-white px-8 py-3 bg-orange-500 cursor-pointer">
          SEE PRODUCT
        </button>
      </div>
    </div>
  );
}

export default Hero;
