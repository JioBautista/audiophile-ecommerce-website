import React from "react";

function Button({ children, styles }) {
  return (
    <button className={`px-8 py-3 cursor-pointer ${styles}`}>{children}</button>
  );
}

export default Button;
