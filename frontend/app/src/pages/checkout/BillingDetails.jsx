import React from "react";

function BillingDetails() {
  const inputStyles = {
    className: "border-gray-300 border-2 w-full px-5 py-4 rounded-md",
  };
  const textStyles = {
    className: "font-semibold",
  };
  return (
    <div className="space-y-4">
      <h1 className="font-semibold tracking-widest text-orange-500">
        BILLING DETAILS
      </h1>
      <p {...textStyles}>Name</p>
      <input {...inputStyles} placeholder="Alexei Ward" />
      <p {...textStyles}>Email Address</p>
      <input {...inputStyles} type="email" placeholder="alexei@mail.com" />
      <p {...textStyles}>Phone Number</p>
      <input {...inputStyles} placeholder="+1 202-555-0136" />
    </div>
  );
}

export default BillingDetails;
