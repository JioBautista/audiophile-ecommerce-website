import React from "react";
import Product from "./Product";
import Container from "../../components/Container";
import { useQuery } from "@tanstack/react-query";
import { fetchProductDetail } from "../../api/fetchProductDetail";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { productId } = useParams();
  const { isPending, isError, data } = useQuery({
    queryKey: ["productDetail", productId],
    queryFn: fetchProductDetail,
  });

  if (isPending) {
    return <h1>Loading ...</h1>;
  }
  if (isError) {
    return <h1>Error occured...</h1>;
  }

  const product =
    data && data.filter((items) => items.id === parseInt(productId));

  console.log(product);
  return (
    <Container styles={"px-5"}>
      <Product data={product} />
    </Container>
  );
}

export default ProductDetails;
