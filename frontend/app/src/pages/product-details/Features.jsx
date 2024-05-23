import React from "react";
import Container from "../../components/Container";

function Features({ data }) {
  const includes = data && data[0].includes;
  console.log(includes);
  return (
    <Container styles={"px-5 space-y-5"}>
      <div className="space-y-5">
        <h1 className="text-3xl font-semibold">FEATURES</h1>
        {data &&
          data.map((items) => (
            <p className="text-gray-500">{items.features}</p>
          ))}
      </div>

      <div className="space-y-5 md:flex  md:gap-20 md:space-y-0">
        <h1 className="text-3xl font-semibold">IN THE BOX</h1>
        <div>
          {includes &&
            includes.map((items) => (
              <>
                <p className="font-bold text-orange-500">
                  {items.quantity}x{" "}
                  <span className="font-normal text-gray-500">
                    {items.item}
                  </span>
                </p>
              </>
            ))}
        </div>
      </div>
    </Container>
  );
}

export default Features;
