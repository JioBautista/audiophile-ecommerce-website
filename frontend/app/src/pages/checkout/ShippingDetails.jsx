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

      <div className="space-y-5 md:grid md:grid-cols-2 md:grid-rows-3 md:gap-5 md:space-y-0">
        <div className="space-y-2 md:col-span-2">
          <label {...textStyles} htmlFor="address">
            Address
          </label>
          <input
            {...inputStyles}
            placeholder="1137 Williams Avenue"
            id="address"
          />
        </div>

        <div className="space-y-2">
          <label {...textStyles} htmlFor="zip">
            ZIP Code
          </label>
          <input {...inputStyles} type="email" placeholder="10001" id="zip" />
        </div>

        <div className="space-y-2">
          <label {...textStyles} htmlFor="city">
            City
          </label>
          <input {...inputStyles} placeholder="New York" id="city" />
        </div>

        <div className="space-y-2">
          <label {...textStyles} htmlFor="country">
            Country
          </label>
          <input {...inputStyles} placeholder="United States" id="country" />
        </div>
      </div>
    </div>
  );
}

export default ShippingDetails;
