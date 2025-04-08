import React from "react";
import Container from "../../components/Container";

function Features({ data }) {
  const includes = data ? data[0].properties.includes : null;

  return (
    <Container styles={"px-5 space-y-20 lg:flex lg:space-y-0 lg:gap-20"}>
      <div className="max-w-[650px] space-y-5">
        <h1 className="text-3xl font-semibold">FEATURES</h1>
        {data?.map((element) => (
          <React.Fragment key={element.id}>
            <p className="text-gray-500">{element.properties.features}</p>
          </React.Fragment>
        ))}
      </div>

      <div className="space-y-10 md:flex md:gap-56 md:space-y-0 lg:flex-col lg:gap-5">
        <h1 className="text-3xl font-semibold">IN THE BOX</h1>
        <div>
          {includes &&
            includes.map((element, index) => (
              <React.Fragment key={index}>
                <div className="mb-4 flex items-center gap-5">
                  <p className="font-bold text-orange-500">
                    {element.quantity}x
                  </p>
                  <p className="text-gray-500">{element.item}</p>
                </div>
              </React.Fragment>
            ))}
        </div>
      </div>
    </Container>
  );
}

export default Features;
