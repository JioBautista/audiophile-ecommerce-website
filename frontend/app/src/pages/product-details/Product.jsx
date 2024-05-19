import React from "react";

function Product({ data }) {
  console.log(data);
  return (
    <div>
      {data &&
        data.map((items) => (
          <>
            <div>
              <img src={items.categoryImage.mobile} />
              <div>
                <h1>{items.name}</h1>
              </div>
            </div>
          </>
        ))}
    </div>
  );
}

export default Product;
