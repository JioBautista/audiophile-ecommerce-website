import React from "react";
import Container from "../../components/Container";
import Button from "../../components/Button";

function Content() {
  return (
    <Container styles={"py-10 px-5"}>
      <div className="bg-orange-500 text-center py-20 bg-zx9-bg-pattern bg-no-repeat bg-top bg-contain  mb-10">
        <img
          src="src/assets/home/mobile/image-speaker-zx9.png"
          className="w-[170px] mx-auto"
        />
        <div>
          <h1 className="text-white text-4xl font-bold tracking-widest my-5 md:text-6xl lg:w-6/12">
            ZX9 SPEAKER
          </h1>
          <p className="text-white w-9/12 mx-auto mb-5 md:w-6/12 lg:mx-0 lg:w-5/12">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Button styles={"bg-black text-white"}>SEE PRODUCT</Button>
        </div>
      </div>

      <div className="bg-zx7-pattern-mbl bg-cover bg-no-repeat  bg-right px-5 py-28 mb-10">
        <h1 className="text-4xl font-bold tracking-widest my-5 md:text-6xl lg:w-6/12">
          ZX7 SPEAKER
        </h1>
        <Button styles={"bg-transparent border-solid border-black border-2"}>
          SEE PRODUCT
        </Button>
      </div>

      <div className="flex flex-col gap-10">
        <img src="src/assets/home/mobile/image-earphones-yx1.jpg" />

        <div className="bg-gray-200 py-10 px-5">
          <h1 className="text-4xl font-bold tracking-widest my-5 md:text-6xl lg:w-6/12">
            YX1 EARPHONES
          </h1>
          <Button styles={"bg-transparent border-solid border-black border-2"}>
            SEE PRODUCT
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default Content;
