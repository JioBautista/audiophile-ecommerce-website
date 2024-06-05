import React from "react";

function ShippingDetails({ register }) {
  const inputStyles = {
    className:
      "border-gray-300 border-2 w-full px-5 py-4 rounded-md focus:outline-orange-500  focus:invalid:outline-red-500 cursor-pointer",
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
            required
            {...register("address", { required: true })}
          />
        </div>

        <div className="space-y-2">
          <label {...textStyles} htmlFor="zip">
            ZIP Code
          </label>
          <input
            {...inputStyles}
            placeholder="10001"
            id="zip"
            required
            {...register("zipCode", { required: true })}
          />
        </div>

        <div className="space-y-2">
          <label {...textStyles} htmlFor="city">
            City
          </label>
          <input
            {...inputStyles}
            placeholder="New York"
            id="city"
            required
            {...register("city", { required: true })}
          />
        </div>

        <div className="space-y-2">
          <label {...textStyles} htmlFor="country">
            Country
          </label>
          <input
            {...inputStyles}
            placeholder="United States"
            id="country"
            required
            {...register("country", { required: true })}
          />
        </div>
      </div>
    </div>
  );
}

export default ShippingDetails;
