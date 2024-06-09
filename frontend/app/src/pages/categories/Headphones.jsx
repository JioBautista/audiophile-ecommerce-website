import React from "react";
import Products from "./Products";
import Category from "../../navbar/Category";
import EndContent from "../../footer/EndContent";
import { data } from "../../data/data";

function Headphones() {
  const headphones =
    data && data.filter((obj) => obj.category === "headphones");

  return (
    <>
      <div className="bg-black px-5 py-10 text-center text-3xl font-semibold tracking-widest text-white">
        <h1>HEADPHONES</h1>
      </div>
      <Products data={headphones} />
      <Category />
      <EndContent />
    </>
  );
}

export default Headphones;
