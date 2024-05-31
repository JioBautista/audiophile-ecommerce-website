import React from "react";

function ShippingDetails() {
  const inputStyles = {
    className: "border-gray-300 border-2 w-full px-5 py-4 rounded-md",
  };
  const textStyles = {
    className: "font-semibold",
  };
  return (
    <div className="space-y-4">
      <h1 className="font-semibold tracking-widest text-orange-500">
        SHIPPING INFO
      </h1>
      <p {...textStyles}>Address</p>
      <input {...inputStyles} placeholder="1137 Williams Avenue" />
      <p {...textStyles}>ZIP Code</p>
      <input {...inputStyles} type="email" placeholder="10001" />
      <p {...textStyles}>City</p>
      <input {...inputStyles} placeholder="New York" />
      <p {...textStyles}>Country</p>
      <input {...inputStyles} placeholder="United States" />
    </div>
  );
}

export default ShippingDetails;
