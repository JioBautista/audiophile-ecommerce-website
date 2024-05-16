import React from "react";
import Button from "../../components/Button";

function HomeYx1() {
  return (
    <div className="flex flex-col md:flex-row gap-5 justify-between">
      <img
        src="src/assets/home/mobile/image-earphones-yx1.jpg"
        className=" md:hidden rounded-xl"
      />
      <img
        src="src/assets/home/tablet/image-earphones-yx1.jpg"
        className="hidden md:block lg:hidden max-w-[340px] rounded-xl"
      />
      <img
        src="src/assets/home/desktop/image-earphones-yx1.jpg"
        className="hidden lg:block rounded-xl"
      />

      <div className="bg-gray-200 py-10 px-5 grow flex flex-col items-start justify-center lg:px-14 rounded-xl">
        <h1 className="text-4xl font-bold tracking-widest my-5 md:text-3xl">
          YX1 EARPHONES
        </h1>
        <Button styles={"bg-transparent border-solid border-black border-2"}>
          SEE PRODUCT
        </Button>
      </div>
    </div>
  );
}

export default HomeYx1;
