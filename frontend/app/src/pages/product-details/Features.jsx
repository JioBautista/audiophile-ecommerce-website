import React from "react";
import Container from "../../components/Container";

function Features({ data }) {
  const includes = data && data.filter((ojb) => ojb.includes);
  console.log(includes);
  return (
    <Container styles={"px-5"}>
      <div className="space-y-5">
        <h1 className="text-3xl font-semibold">FEATURES</h1>
        {data &&
          data.map((items) => (
            <p className="text-gray-500">{items.features}</p>
          ))}
      </div>
    </Container>
  );
}

export default Features;
