import React from "react";
import { Link } from "react-router-dom";

function CheckoutModal() {
  const order = JSON.parse(sessionStorage.getItem("order"));
  const prices = order && order.orders.map((obj) => obj.price);
  const total =
    prices &&
    prices.reduce((prevValue, currentValue) => prevValue + currentValue, 0);
  console.log(order);
  console.log(total);
  return (
    <>
      <div className="absolute left-5 right-5 top-36 z-10 mx-auto max-w-[540px] space-y-5 rounded-md bg-white p-5 lg:p-10">
        <img src="/src/assets/checkout/icon-order-confirmation.svg" />
        <div>
          <h1 className="text-xl font-semibold tracking-widest lg:text-3xl">
            THANK YOU
          </h1>
          <h1 className="text-xl font-semibold tracking-widest lg:text-3xl">
            FOR YOUR ORDER
          </h1>
        </div>
        <div className="space-y-5 rounded-lg bg-neutral-200/50">
          {order &&
            order.orders.map((items) => (
              <>
                <div className="flex gap-3 px-3 py-5">
                  <img
                    src={items.img.replace("/assets", "/src/assets")}
                    className="w-[50px]"
                  />
                  <div className="grow space-y-1">
                    <h1 className="font-semibold">{items.name}</h1>
                    <h1>${items.price}</h1>
                  </div>
                  <h1 className="pr-3">x{items.quantity}</h1>
                </div>
              </>
            ))}
          <div className="space-y-2 rounded-b-lg bg-black p-5">
            <h1 className="text-xl text-gray-500">Grand Total</h1>
            <h1 className="text-xl text-white">${total && total}</h1>
          </div>
        </div>
        <p className="text-gray-500">
          You will receive an email confirmation shortly.
        </p>
        <Link className="block" to={"/"} onClick={() => sessionStorage.clear()}>
          <button className="w-full bg-orange-500 px-8 py-3 text-sm font-semibold tracking-widest text-white">
            BACK TO HOME
          </button>
        </Link>
      </div>
      <div className="absolute inset-0 bg-black/50"></div>
    </>
  );
}

export default CheckoutModal;
