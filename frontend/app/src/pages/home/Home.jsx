import React from "react";
import Hero from "./Hero";
import Category from "../../navbar/Category";
import Content from "./Content";

function Home() {
  return (
    <div>
      <Hero />
      <Category />
      <Content />
    </div>
  );
}

export default Home;
