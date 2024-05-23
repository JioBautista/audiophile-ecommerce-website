import React from "react";
import Products from "./Products";
import Category from "../../navbar/Category";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../api/fetchProducts";

function Earphones() {
  const { isPending, isError, data } = useQuery({
    queryKey: ["headphones"],
    queryFn: fetchProducts,
  });

  if (isPending) {
    return <h1>Loading ...</h1>;
  }
  if (isError) {
    return <h1>Error occured...</h1>;
  }

  const earphones = data && data.filter((obj) => obj.category === "earphones");

  return (
    <>
      <div className="bg-black px-5 py-10 text-center text-3xl font-semibold tracking-widest text-white">
        <h1>EARPHONES</h1>
      </div>
      <Products data={earphones} />
      <Category />
    </>
  );
}

export default Earphones;
