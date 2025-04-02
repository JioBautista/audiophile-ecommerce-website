import React from "react";
import Container from "../../components/Container";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

function Products({ data }) {
  return (
    <Container
      styles={
        "px-5 py-16 flex-col-reverse flex text-center gap-28 lg:text-start"
      }
    >
      {data?.map((items, index) => (
        <React.Fragment key={items.properties.id}>
          <div
            className={`space-y-10 ${index === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} lg:flex`}
          >
            <div>
              <img
                src={items.properties.categoryImage.mobile.replace(
                  "./assets",
                  "/assets",
                )}
                className="rounded-lg md:hidden"
              />
              <img
                src={items.properties.categoryImage.tablet.replace(
                  "./assets",
                  "/assets",
                )}
                className="hidden rounded-lg md:block lg:hidden"
              />
              <img
                src={items.properties.categoryImage.desktop.replace(
                  "./assets",
                  "/assets",
                )}
                className="hidden rounded-lg lg:block"
              />
            </div>
            <div className="space-y-5 lg:px-14">
              {items.properties.new && (
                <span className="text-md tracking-[0.5rem] text-orange-500">
                  NEW PRODUCT
                </span>
              )}
              <h1 className="text-4xl font-semibold tracking-widest md:px-28 lg:px-0">
                {items.properties.name.toUpperCase()}
              </h1>
              <p className="text-gray-500 md:px-10 lg:px-0">
                {items.properties.description}
              </p>
              <Link
                to={`/product-details/${items.properties.id}`}
                className="block"
              >
                <Button styles={"bg-orange-500 text-white hover:bg-orange-300"}>
                  SEE PRODUCT
                </Button>
              </Link>
            </div>
          </div>
        </React.Fragment>
      ))}
    </Container>
  );
}

export default Products;
