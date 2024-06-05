import React from "react";

function BillingDetails({ register, errors }) {
  const inputStyles = {
    className: `border-gray-300 border-2 w-full px-5 py-4 rounded-md focus:outline-orange-500  focus:invalid:outline-red-500 cursor-pointer`,
  };
  const textStyles = {
    className: "font-semibold",
  };
  return (
    <div className="space-y-4">
      <h1 className="font-semibold tracking-widest text-orange-500">
        BILLING DETAILS
      </h1>

      <div className="space-y-5 md:grid md:grid-cols-2 md:gap-5 md:space-y-0">
        <div className="space-y-2">
          <label {...textStyles} htmlFor="name">
            Name
          </label>
          <input
            {...inputStyles}
            placeholder="Alexei Ward"
            id="name"
            required
            {...register("customer")}
          />
        </div>

        <div className="space-y-2">
          <label {...textStyles} htmlFor="email">
            Email Address
          </label>
          <input
            {...inputStyles}
            type="email"
            placeholder="alexei@mail.com"
            id="email"
            required
            {...register("email", { required: true })}
          />
        </div>

        <div className="space-y-2">
          <label {...textStyles} htmlFor="number">
            Phone Number
          </label>
          <input
            {...inputStyles}
            placeholder="+1 202-555-0136"
            id="number"
            {...register("number", { required: true })}
          />
        </div>
      </div>
    </div>
  );
}

export default BillingDetails;
