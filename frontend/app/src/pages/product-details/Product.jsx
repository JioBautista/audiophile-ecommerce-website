import React from "react";
import Button from "../../components/Button";

function Product({ data }) {
  const [quantity, setQuantity] = React.useState(0);

  const productOrder = {
    name: data && data[0].name,
    price: data && data[0].price,
    quantity: quantity,
  };

  return (
    <div className="space-y-5 px-5 py-5 md:flex md:items-center">
      {data &&
        data.map((items) => (
          <>
            <img
              src={items.image.mobile.replace("./assets", "/src/assets")}
              className="rounded-lg md:hidden"
            />
            <img
              src={items.image.tablet.replace("./assets", "/src/assets")}
              className="hidden w-5/12 rounded-lg md:block lg:hidden"
            />
            <img
              src={items.image.desktop.replace("./assets", "/src/assets")}
              className="hidden w-5/12 rounded-lg lg:block"
            />
            <div className="space-y-5 md:pl-12">
              {items.new && (
                <span className="text-md tracking-[0.5rem] text-orange-500">
                  NEW PRODUCT
                </span>
              )}
              <h1 className="text-4xl font-semibold tracking-widest">
                {items.name}
              </h1>
              <p className="text-gray-500">{items.description}</p>
              <p className="text-lg font-bold tracking-widest">
                $ {items.price}
              </p>
              <div className="flex gap-5">
                <div className="flex justify-center gap-5 bg-gray-200 px-5 py-3">
                  <button>-</button>
                  <p>1</p>
                  <button>+</button>
                </div>
                <Button styles={"bg-orange-500 text-white"}>ADD TO CART</Button>
                {/* <button
                  onClick={addToCart}
                  className="bg-blue-500 px-5 py-2 text-white"
                >
                  ADD TO CART
                </button> */}
              </div>
            </div>
          </>
        ))}
    </div>
  );
}

export default Product;
