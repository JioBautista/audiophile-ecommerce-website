import React from "react";
import Button from "../../components/Button";

function HomeZx9() {
  return (
    <div className="bg-orange-500 text-center py-16 bg-zx9-bg-pattern bg-no-repeat bg-center bg-contain lg:flex items-center px-20 lg:text-start rounded-xl">
      <img
        src="src/assets/home/mobile/image-speaker-zx9.png"
        className="w-[170px] mx-auto md:hidden"
      />
      <img
        src="src/assets/home/tablet/image-speaker-zx9.png"
        className="hidden md:block lg:hidden w-[200px] mx-auto"
      />
      <img
        src="src/assets/home/desktop/image-speaker-zx9.png"
        className="hidden lg:block w-[400px] "
      />
      <div className="max-w-[350px] mx-auto">
        <h1 className="text-white text-4xl font-bold tracking-widest my-5 md:text-6xl">
          ZX9 SPEAKER
        </h1>
        <p className="text-white mb-5">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Button styles={"bg-black text-white"}>SEE PRODUCT</Button>
      </div>
    </div>
  );
}

export default HomeZx9;
