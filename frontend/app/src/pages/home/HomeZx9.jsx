import React from "react";
import Button from "../../components/Button";

function HomeZx9() {
  return (
    <div className="items-center rounded-xl bg-orange-500 bg-zx9-bg-pattern bg-contain bg-center bg-no-repeat px-20 py-16 text-center lg:flex lg:text-start">
      <img
        src="src/assets/home/mobile/image-speaker-zx9.png"
        className="mx-auto w-[170px] md:hidden"
      />
      <img
        src="src/assets/home/tablet/image-speaker-zx9.png"
        className="mx-auto hidden w-[200px] md:block lg:hidden"
      />
      <img
        src="src/assets/home/desktop/image-speaker-zx9.png"
        className="hidden w-[400px] lg:block "
      />
      <div className="mx-auto max-w-[350px]">
        <h1 className="my-5 text-4xl font-bold tracking-widest text-white md:text-6xl">
          ZX9 SPEAKER
        </h1>
        <p className="mb-5 text-white">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Button styles={"bg-black text-white hover:bg-gray-700"}>
          SEE PRODUCT
        </Button>
      </div>
    </div>
  );
}

export default HomeZx9;
