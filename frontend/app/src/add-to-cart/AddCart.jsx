import React from "react";
import Container from "../components/Container";
import Button from "../components/Button";
import Overlay from "../components/Overlay";

function AddCart() {
  const shoppingCart = JSON.parse(sessionStorage.getItem("shoppingCart"));
  const prices = shoppingCart && shoppingCart.map((obj) => obj.price);
  const total =
    prices &&
    prices.reduce((prevValue, currentValue) => prevValue + currentValue);
  return (
    <>
      <Container
        styles={
          "bg-white p-5 absolute max-w-[380px] inset-x-0 top-28 md:left-1/3 lg:left-2/4 rounded-xl space-y-5 z-10"
        }
      >
        <div className="flex justify-between">
          <h1 className="text-lg font-semibold tracking-widest">
            CART({shoppingCart && shoppingCart.length})
          </h1>
          <h2 className="cursor-pointer text-gray-500 underline">Remove all</h2>
        </div>
        {shoppingCart ? (
          shoppingCart.map((items) => (
            <React.Fragment key={items.id}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold">{items.name}</p>
                  <p>${items.price}</p>
                </div>

                <div className="flex items-center justify-center gap-1 bg-gray-200">
                  <div className="cursor-pointer px-3">
                    <button>-</button>
                  </div>
                  <p className="p-2">{items.quantity}</p>
                  <div className="cursor-pointer px-3">
                    <button>+</button>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}

        <div className="flex justify-between">
          <h1 className="text-gray-500">TOTAL</h1>
          <p>${total}</p>
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
