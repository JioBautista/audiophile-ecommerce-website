import React from "react";
import Products from "./Products";
import Category from "../../navbar/Category";
import EndContent from "../../footer/EndContent";
import { data } from "../../data/data";

function Earphones() {
  const earphones = data && data.filter((obj) => obj.category === "earphones");

  return (
    <>
      <div className="bg-black px-5 py-10 text-center text-3xl font-semibold tracking-widest text-white">
        <h1>EARPHONES</h1>
      </div>
      <Products data={earphones} />
      <Category />
      <EndContent />
    </>
  );
}

export default Earphones;
