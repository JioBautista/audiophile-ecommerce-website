import React from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location]);
  return null;
}

export default ScrollToTop;
