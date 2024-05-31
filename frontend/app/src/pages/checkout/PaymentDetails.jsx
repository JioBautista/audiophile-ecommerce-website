import React from "react";

function PaymentDetails() {
  const inputStyles = {
    className: "border-gray-300 border-2 w-full px-5 py-4 rounded-md",
  };
  const textStyles = {
    className: "font-semibold",
  };
  return (
    <div className="space-y-4">
      <h1 className="font-semibold tracking-widest text-orange-500">
        PAYMENT DETAILS
      </h1>

      <p {...textStyles}>Payment Method</p>

      <div className="w-full rounded-md border-2 border-gray-300 px-5 py-4 focus-within:border-orange-500">
        <input
          type="radio"
          name="payment_type"
          className="mr-5 cursor-pointer"
          id="e-money"
        />
        <label htmlFor="e-money">e-Money</label>
      </div>

      <div className="w-full rounded-md border-2 border-gray-300 px-5 py-4 focus-within:border-orange-500">
        <input
          type="radio"
          name="payment_type"
          className="mr-5 cursor-pointer"
          id="cash"
        />
        <label htmlFor="cash">Cash on Delivery</label>
      </div>

      <p {...textStyles}>e-Money Number</p>
      <input {...inputStyles} placeholder="238521993" />
      <p {...textStyles}>e-Money PIN</p>
      <input {...inputStyles} type="email" placeholder="6891" />
    </div>
  );
}

export default PaymentDetails;
