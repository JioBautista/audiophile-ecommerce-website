import React from "react";
import Container from "../../components/Container";
import Button from "../../components/Button";

function Products({ data }) {
  return (
    <Container
      styles={
        "px-5 py-16 flex-col-reverse flex text-center gap-28 lg:text-start"
      }
    >
      {data &&
        data.map((items, index) => (
          <React.Fragment key={items.id}>
            <div
              className={`space-y-10 px-5 ${index === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} lg:flex`}
            >
              <div>
                <img
                  src={items.categoryImage.mobile.replace(
                    "./assets",
                    "/src/assets",
                  )}
                  className="rounded-lg md:hidden"
                />
                <img
                  src={items.categoryImage.tablet.replace(
                    "./assets",
                    "/src/assets",
                  )}
                  className="hidden rounded-lg md:block lg:hidden"
                />
                <img
                  src={items.categoryImage.desktop.replace(
                    "./assets",
                    "/src/assets",
                  )}
                  className="hidden rounded-lg lg:block"
                />
              </div>
              <div className="space-y-5 lg:px-14">
                {items.new && (
                  <span className="text-md tracking-[0.5rem] text-orange-500">
                    NEW PRODUCT
                  </span>
                )}
                <h1 className="text-4xl font-semibold tracking-widest md:px-28 lg:px-0">
                  {items.name.toUpperCase()}
                </h1>
                <p className="text-gray-500 md:px-10 lg:px-0 ">
                  {items.description}
                </p>
                <Button styles={"bg-orange-500 text-white"}>SEE PRODUCT</Button>
              </div>
            </div>
          </React.Fragment>
        ))}
    </Container>
  );
}

export default Products;
