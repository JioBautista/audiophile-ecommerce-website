import React from "react";
import Product from "./Product";
import EndContent from "../../footer/EndContent";
import Features from "./Features";
import ImageGallery from "./ImageGallery";
import Suggestions from "./Suggestions";
import Container from "../../components/Container";
import Category from "../../navbar/Category";
import { useQuery } from "@tanstack/react-query";
import { fetchProductDetail } from "../../api/fetchProductDetail";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { productId } = useParams();
  const { isPending, isError, data } = useQuery({
    queryKey: ["productDetail", productId],
    queryFn: fetchProductDetail,
  });

  // if (isPending) {
  //   return <h1>Loading ...</h1>;
  // }
  // if (isError) {
  //   return <h1>Error occured...</h1>;
  // }

  const product =
    data && data.filter((items) => items.id === parseInt(productId));

  const others = product && product[0].others.map((items) => items.slug);

  const suggestionIDs =
    data &&
    data.reduce((acc, obj1) => {
      const matchingIDs = others && others.find((obj2) => obj1.slug === obj2);
      if (matchingIDs) {
        acc.push(obj1);
      }
      return acc;
    }, []);

  console.log(data);
  console.log(others);
  console.log(suggestionIDs);
  return (
    <Container styles={`px-5 space-y-28 py-10`}>
      <Product data={product} />
      <Features data={product} />
      <ImageGallery data={product} />
      <Suggestions data={suggestionIDs} />
      <Category />
      <EndContent />
    </Container>
  );
}

export default ProductDetails;
