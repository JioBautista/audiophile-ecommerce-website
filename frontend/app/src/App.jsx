import React from "react";
import NavBar from "./navbar/NavBar";
import Footer from "./footer/Footer";
import EndContent from "./footer/EndContent";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <EndContent />
      <Footer />
    </>
  );
}

export default App;
