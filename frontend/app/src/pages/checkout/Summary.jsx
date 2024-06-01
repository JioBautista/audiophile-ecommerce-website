import React from "react";
import Container from "../../components/Container";
import Button from "../../components/Button";

function Summary() {
  const shoppingCart = JSON.parse(sessionStorage.getItem("shoppingCart"));
  const prices = shoppingCart && shoppingCart.map((obj) => obj.price);
  const total =
    prices &&
    prices.reduce((prevValue, currentValue) => prevValue + currentValue, 0);
  return (
    <React.Fragment>
      <Container styles={"bg-white p-5 rounded-md space-y-5"}>
        <h1 className="text-lg font-semibold tracking-widest">SUMMARY</h1>
        {shoppingCart ? (
          shoppingCart.map((items, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center gap-5">
                <img
                  src={items.img.replace("./assets", "/src/assets")}
                  className="w-20 rounded-lg"
                />
                <div className="grow">
                  <p className="font-bold">{items.name}</p>
                  <p>${items.price}</p>
                </div>

                <p>x{items.quantity}</p>
              </div>
            </React.Fragment>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}

        <div className="flex justify-between">
          <h1 className="text-gray-500">TOTAL</h1>
          <p className="font-bold tracking-wide">${total}</p>
        </div>

        <div className="flex justify-between">
          <h1 className="text-gray-500">SHIPPING</h1>
          <p className="font-bold tracking-wide">$50</p>
        </div>

        <div className="flex justify-between">
          <h1 className="text-gray-500">VAT(INCLUDED)</h1>
          <p className="font-bold tracking-wide">$0</p>
        </div>

        <button
          className={
            "w-full bg-orange-500 px-8 py-3 tracking-widest text-white"
          }
          type="submit"
        >
          CONTINUE & PAY
        </button>
      </Container>
    </React.Fragment>
  );
}

export default Summary;
