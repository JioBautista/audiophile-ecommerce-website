import React from "react";
import Container from "../../components/Container";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

function Suggestions({ data }) {
  return (
    <Container styles={"px-5 text-center space-y-5"}>
      <h1 className="text-3xl font-semibold tracking-widest">
        YOU MAY ALSO LIKE
      </h1>
      <div className="space-y-10 md:flex md:items-center md:gap-10 md:space-y-0 ">
        {data &&
          data.map((items, index) => (
            <React.Fragment key={items.id}>
              <div className="space-y-5">
                <img
                  src={items.image.mobile.replace("./assets", "/src/assets")}
                  className="rounded-lg md:hidden"
                />
                <img
                  src={items.image.tablet.replace("./assets", "/src/assets")}
                  className="hidden rounded-lg md:block lg:hidden"
                />
                <img
                  src={items.image.desktop.replace("./assets", "/src/assets")}
                  className="hidden rounded-lg lg:block"
                />
                <h1 className="text-xl font-semibold tracking-widest">
                  {items.name}
                </h1>
                <Link to={`/product-details/${items.id}`} className="block">
                  <Button
                    styles={
                      "bg-orange-500 text-white tracking-widest hover:bg-orange-300"
                    }
                  >
                    SEE PRODUCT
                  </Button>
                </Link>
              </div>
            </React.Fragment>
          ))}
      </div>
    </Container>
  );
}

export default Suggestions;
