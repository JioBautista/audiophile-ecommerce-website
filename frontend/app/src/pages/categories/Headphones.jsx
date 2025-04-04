import React from "react";
import Products from "./Products";
import Category from "../../navbar/Category";
import EndContent from "../../footer/EndContent";
import { useQuery } from "@tanstack/react-query";

function Headphones() {
  // Fetch data from server
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      // For development URL
      const url = "http://localhost:10000/";
      // For production URL
      // const url = "https://audiophile-ecommerce-web-server.onrender.com/";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error.message);
      }
    },
    staleTime: 1000 * 60 * 5,
  });
  // URL Search Params
  const paramsString = window.location.search;
  const searchParams = new URLSearchParams(paramsString);
  const category = searchParams.get("category");
  // Filters the data
  const products = data?.filter((obj) => obj.properties.category === category);

  console.log(products);
  return (
    <>
      <div className="bg-black px-5 py-10 text-center text-3xl font-semibold uppercase tracking-widest text-white">
        <h1>{category}</h1>
      </div>
      <Products data={products} />
      <Category />
      <EndContent />
    </>
  );
}

export default Headphones;
