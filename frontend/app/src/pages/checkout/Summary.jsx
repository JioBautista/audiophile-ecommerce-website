import React from "react";
import Container from "../../components/Container";
import { useStore } from "../../store/useStore";

function Summary() {
  const { flag } = useStore((state) => ({ flag: state.flag }));
  const shoppingCart = JSON.parse(sessionStorage.getItem("shoppingCart"));
  const prices = shoppingCart ? shoppingCart.map((obj) => obj.price) : 0;
  const total = prices
    ? prices.reduce((prevValue, currentValue) => prevValue + currentValue, 0)
    : 0;
  const vat = total && total * 0.2;

  React.useEffect(() => {}, [flag]);

  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <React.Fragment>
      <Container
        styles={"bg-white p-5 rounded-md space-y-5  lg:py-10 lg:max-w-[350px]"}
      >
        <h1 className="text-lg font-semibold tracking-widest">SUMMARY</h1>
        {shoppingCart ? (
          shoppingCart.map((items, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center gap-5">
                <img
                  src={items.img.replace("./assets", "/assets")}
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
          <p className="font-bold tracking-wide">${Math.round(vat)}</p>
        </div>

        <div className="flex justify-between">
          <h1 className="text-gray-500">GRAND TOTAL</h1>
          <p className="tracking wide font-bold tracking-wide text-orange-500">
            ${total + 50}
          </p>
        </div>
        {shoppingCart && (
          <button
            className={
              "w-full bg-orange-500 px-8 py-3 tracking-widest text-white"
            }
            type="submit"
            onClick={handleClick}
          >
            CONTINUE & PAY
          </button>
        )}
      </Container>
    </React.Fragment>
  );
}

export default Summary;
