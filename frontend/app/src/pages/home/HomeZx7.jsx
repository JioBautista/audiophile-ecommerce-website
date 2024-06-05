import React from "react";
import Button from "../../components/Button";

function HomeZx7() {
  return (
    <div className="rounded-xl bg-zx7-pattern-mbl bg-cover bg-center bg-no-repeat  px-5 py-28 md:bg-zx7-pattern-tblt md:px-12 lg:bg-zx7-pattern-dsktp lg:px-20">
      <h1 className="my-5 text-4xl font-bold tracking-widest md:text-3xl">
        ZX7 SPEAKER
      </h1>
      <Button
        styles={
          "bg-transparent border-solid border-black border-2 hover:bg-black hover:text-white"
        }
      >
        SEE PRODUCT
      </Button>
    </div>
  );
}

export default HomeZx7;
