import React from "react";
import Container from "../../components/Container";
import HomeZx9 from "./HomeZx9";
import HomeZx7 from "./HomeZx7";
import HomeYx1 from "./HomeYx1";

function Content() {
  return (
    <Container styles={"py-10 px-5 space-y-14"}>
      <HomeZx9 />
      <HomeZx7 />
      <HomeYx1 />
    </Container>
  );
}

export default Content;
