import React from "react";
import { useStore } from "../../store/useStore";

function Product({ data }) {
  const [quantity, setQuantity] = React.useState(0);
  const { toggleCart } = useStore((state) => ({
    toggleCart: state.toggleCart,
  }));
  const price = data && data.price * quantity;

  const product = {
    id: data.id,
    name: data && data.name,
    initialPrice: data && data.price,
    price: price,
    quantity: quantity,
    img: data && data.image.mobile,
  };

  const shoppingCart = JSON.parse(sessionStorage.getItem("shoppingCart"));

  if (shoppingCart === null) {
    sessionStorage.setItem("shoppingCart", JSON.stringify([]));
  }

  function addToCart() {
    const shoppingCart = JSON.parse(sessionStorage.getItem("shoppingCart"));
    shoppingCart.push(product);
    sessionStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
    toggleCart();
    window.scrollTo(0, 0);
  }

  function incrementQuantity() {
    setQuantity(quantity + 1);
  }

  function decrementQuantity(num) {
    setQuantity((prevQty) => Math.max(prevQty + num, 0));
  }
  return (
    <div className="space-y-5 px-5 py-5 md:flex md:items-center">
      {data &&
        data.map((items) => (
          <React.Fragment key={items.id}>
            <img
              src={items.image.mobile.replace("./assets", "/assets")}
              className="rounded-lg md:hidden"
            />
            <img
              src={items.image.tablet.replace("./assets", "/assets")}
              className="hidden w-5/12 rounded-lg md:block lg:hidden"
            />
            <img
              src={items.image.desktop.replace("./assets", "/assets")}
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
                <div className="flex justify-center gap-5 bg-gray-200">
                  <div
                    className="cursor-pointer px-4 py-2 hover:text-orange-500"
                    onClick={() => decrementQuantity(-1)}
                  >
                    <button>-</button>
                  </div>
                  <p className="p-2">{quantity}</p>
                  <div
                    className="cursor-pointer px-4 py-2 hover:text-orange-500"
                    onClick={incrementQuantity}
                  >
                    <button>+</button>
                  </div>
                </div>
                <button
                  onClick={addToCart}
                  disabled={quantity === 0}
                  className="cursor-pointer bg-orange-500 px-10 py-2 text-white hover:bg-orange-300"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </React.Fragment>
        ))}
    </div>
  );
}

export default Product;
