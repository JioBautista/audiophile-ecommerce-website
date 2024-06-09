import React from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

function HomeYx1() {
  return (
    <div className="flex flex-col justify-between gap-5 md:flex-row">
      <img
        src="/assets/home/mobile/image-earphones-yx1.jpg"
        className=" rounded-xl md:hidden"
      />
      <img
        src="src/assets/home/tablet/image-earphones-yx1.jpg"
        className="hidden max-w-[340px] rounded-xl md:block lg:hidden"
      />
      <img
        src="src/assets/home/desktop/image-earphones-yx1.jpg"
        className="hidden rounded-xl lg:block"
      />

      <div className="flex grow flex-col items-start justify-center rounded-xl bg-gray-200 px-5 py-10 lg:px-14">
        <h1 className="my-5 text-4xl font-bold tracking-widest md:text-3xl">
          YX1 EARPHONES
        </h1>
        <Link to={"/product-details/1"}>
          <Button
            styles={
              "bg-transparent border-solid border-black border-2 hover:bg-black hover:text-white"
            }
          >
            SEE PRODUCT
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HomeYx1;
