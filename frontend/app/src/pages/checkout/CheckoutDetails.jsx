import React from "react";
import BillingDetails from "./BillingDetails";
import ShippingDetails from "./ShippingDetails";
import PaymentDetails from "./PaymentDetails";

function CheckoutDetails() {
  return (
    <div className="container mx-auto space-y-5 rounded-md bg-white px-5 py-10">
      <h1 className="text-2xl font-semibold tracking-widest">CHECKOUT</h1>
      <BillingDetails />
      <ShippingDetails />
      <PaymentDetails />
    </div>
  );
}

export default CheckoutDetails;
