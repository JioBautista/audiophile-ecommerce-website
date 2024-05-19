import React from "react";
import Button from "../../components/Button";

function Product({ data }) {
  console.log(data);
  return (
    <div className="space-y-5 px-5 py-10">
      {data &&
        data.map((items) => (
          <>
            <div>
              <img
                src={items.image.mobile.replace("./assets", "/src/assets")}
                className="rounded-lg"
              />
            </div>
            <div className="space-y-5">
              {items.new && <span>NEW PRODUCT</span>}
              <h1>{items.name}</h1>
              <p>{items.description}</p>
              <p>$ {items.price}</p>
              <div className="flex gap-5">
                <div className="flex justify-center gap-5 bg-gray-200 px-5 py-3">
                  <button>-</button>
                  <p>1</p>
                  <button>+</button>
                </div>
                <Button styles={"bg-orange-500 text-white"}>ADD TO CART</Button>
              </div>
            </div>
          </>
        ))}
    </div>
  );
}

export default Product;
