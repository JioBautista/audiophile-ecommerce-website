import React from "react";
import Product from "./Product";
import EndContent from "../../footer/EndContent";
import Features from "./Features";
import ImageGallery from "./ImageGallery";
import Suggestions from "./Suggestions";
import Container from "../../components/Container";
import Category from "../../navbar/Category";
import { useParams } from "react-router-dom";
// import { data } from "../../data/data";
import { useQuery } from "@tanstack/react-query";

function ProductDetails() {
  // 1. URL params
  const { productId } = useParams();
  const { isPending, isError, data } = useQuery({
    queryKey: ["products", productId],
    queryFn: async () => {
      // For development URL
      const url = `http://localhost:10000/${productId}}`;
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
    // staleTime: 1000 * 60 * 5,
  });

  // 2. Filters data by ID
  const product = data?.filter((items) => items.id === productId);

  // 3. Maps the "others" key/value from data by slug
  const others = product?.others.map((items) => items.slug);

  const suggestionIDs = data?.reduce((acc, obj1) => {
    const matchingIDs = others && others.find((obj2) => obj1.slug === obj2);
    if (matchingIDs) {
      acc.push(obj1);
    }
    return acc;
  }, []);

  console.log(data);
  return (
    <Container styles={`px-5 space-y-28 py-10`}>
      {/* <Product data={product} /> */}
      <Features data={product} />
      <ImageGallery data={product} />
      <Suggestions data={suggestionIDs} />
      <Category />
      <EndContent />
    </Container>
  );
}

export default ProductDetails;
