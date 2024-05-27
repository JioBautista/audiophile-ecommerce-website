import React from "react";
import Container from "../components/Container";
import Button from "../components/Button";
import Overlay from "../components/Overlay";

function AddCart() {
  return (
    <>
      <Container
        styles={
          "bg-white p-5 absolute max-w-[380px] inset-x-0 top-28 md:left-1/3 lg:left-2/4 rounded-xl space-y-5 z-10"
        }
      >
        <div className="flex justify-between">
          <h1 className="text-lg font-semibold tracking-widest">CART(0)</h1>
          <h2 className="text-gray-500 underline">Remove all</h2>
        </div>

        <div className="flex justify-between">
          <h1 className="text-gray-500">TOTAL</h1>
          <p>$0</p>
        </div>
        <Button styles={"bg-orange-500 text-white tracking-widest w-full"}>
          CHECKOUT
        </Button>
      </Container>
      <Overlay />
    </>
  );
}

export default AddCart;
