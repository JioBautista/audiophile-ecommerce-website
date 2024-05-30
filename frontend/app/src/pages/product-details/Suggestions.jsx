import React from "react";
import Container from "../../components/Container";
import Button from "../../components/Button";

function Suggestions({ data }) {
  const others = data && data[0].others;
  return (
    <Container styles={"px-5 text-center space-y-5"}>
      <h1 className="text-3xl font-semibold tracking-widest">
        YOU MAY ALSO LIKE
      </h1>
      <div className="space-y-10 md:flex md:items-center md:gap-3 md:space-y-0 ">
        {others &&
          others.map((items, index) => (
            <React.Fragment key={index}>
              <div className="space-y-10">
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
                <h1 className="text-3xl font-semibold tracking-widest">
                  {items.name}
                </h1>
                <Button styles={"bg-orange-500 text-white tracking-widest"}>
                  SEE PRODUCT
                </Button>
              </div>
            </React.Fragment>
          ))}
      </div>
    </Container>
  );
}

export default Suggestions;

const numbers = ["hi", "abc", "abc", "abc"];
