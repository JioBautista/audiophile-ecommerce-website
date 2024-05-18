import React from "react";
import Products from "./Products";
import Category from "../../navbar/Category";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../api/fetchProducts";

function Headphones() {
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

  const headphones =
    data && data.filter((obj) => obj.category === "headphones");

  return (
    <>
      <div className="bg-black px-5 py-10 text-center text-3xl font-semibold tracking-widest text-white">
        <h1>HEADPHONES</h1>
      </div>
      <Products data={headphones} />
      <Category />
    </>
  );
}

export default Headphones;
