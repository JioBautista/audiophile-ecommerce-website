import React from "react";
import CheckoutDetails from "./CheckoutDetails";
import Summary from "./Summary";

function Checkout() {
  return (
    <div className="space-y-5 bg-gray-100 p-5">
      <CheckoutDetails />
      <Summary />
    </div>
  );
}

export default Checkout;
