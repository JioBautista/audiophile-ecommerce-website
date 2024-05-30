import React from "react";
import Container from "../components/Container";
import Button from "../components/Button";
import Overlay from "../components/Overlay";

function AddCart() {
  const [flag, setFlag] = React.useState(false);
  const data = JSON.parse(sessionStorage.getItem("shoppingCart"));
  const [shoppingCart, setCart] = React.useState(data);
  const prices = shoppingCart && shoppingCart.map((obj) => obj.price);
  const total =
    prices &&
    prices.reduce((prevValue, currentValue) => prevValue + currentValue);

  function removeAllItems() {
    sessionStorage.clear();
    setFlag(!flag);
  }

  React.useEffect(() => {}, [flag]);
  return (
    <React.Fragment>
      <Container
        styles={
          "bg-white p-5 absolute max-w-[380px] inset-x-0 top-28 md:left-1/3 lg:left-2/4 rounded-md space-y-5 z-10"
        }
      >
        <div className="flex justify-between">
          <h1 className="text-lg font-semibold tracking-widest">
            CART({shoppingCart && shoppingCart.length})
          </h1>
          <h2
            className="cursor-pointer text-gray-500 underline"
            onClick={removeAllItems}
          >
            Remove all
          </h2>
        </div>
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

                <div className="flex items-center justify-center gap-1 bg-gray-200 py-2">
                  <div className="cursor-pointer px-3">
                    <button>-</button>
                  </div>
                  <input
                    defaultValue={items.quantity}
                    className="w-10 bg-transparent text-center"
                  />
                  {/* <p className="p-2">x {items.quantity}</p> */}
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
    </React.Fragment>
  );
}

export default AddCart;
