import React from "react";
import Container from "../components/Container";

function EndContent() {
  return (
    <Container
      styles={"px-5 space-y-5 py-10 md:py-20 lg:flex flex-row-reverse"}
    >
      <div>
        <img
          src="/src/assets/shared/mobile/image-best-gear.jpg"
          className="rounded-lg md:hidden"
        />
        <img
          src="/src/assets/shared/tablet/image-best-gear.jpg"
          className="hidden rounded-lg md:block lg:hidden"
        />
        <img
          src="/src/assets/shared/desktop/image-best-gear.jpg"
          className="hidden rounded-lg lg:block"
        />
      </div>

      <div className="container mx-auto space-y-5 px-5 py-10 text-center lg:pr-20 lg:text-start">
        <h1 className="my-5 text-3xl font-bold tracking-widest md:text-4xl">
          BRINGING YOU THE <span className="text-orange-500">BEST</span> AUDIO
          GEAR
        </h1>
        <p className="text-gray-500">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          stoer to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </Container>
  );
}

export default EndContent;
