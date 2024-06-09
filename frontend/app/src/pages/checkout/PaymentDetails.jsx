import React from "react";

function PaymentDetails({ register }) {
  const [cash, setCash] = React.useState(false);
  const inputStyles = {
    className:
      "border-gray-300 border-2 w-full px-5 py-4 rounded-md focus:outline-orange-500  focus:invalid:outline-red-500 cursor-pointer",
  };
  const textStyles = {
    className: "font-semibold cursor-pointer",
  };
  return (
    <div className="space-y-4">
      <h1 className="font-semibold tracking-widest text-orange-500">
        PAYMENT DETAILS
      </h1>

      <div className="space-y-4 md:grid md:grid-cols-2 md:gap-5 md:space-y-0">
        <p {...textStyles}>Payment Method</p>

        <div className="space-y-5">
          <div className="w-full cursor-pointer rounded-md border-2 border-gray-300 px-5 py-4 focus-within:border-orange-500  focus:outline-orange-500 focus:invalid:outline-red-500">
            <input
              type="radio"
              name="payment_type"
              className="mr-5 cursor-pointer"
              id="e-money"
              value={"e-money"}
              required
              {...register("payment_type", { required: true })}
            />
            <label htmlFor="e-money" {...textStyles}>
              e-Money
            </label>
          </div>

          <div
            className="w-full cursor-pointer rounded-md border-2 border-gray-300 px-5 py-4 focus-within:border-orange-500  focus:outline-orange-500 focus:invalid:outline-red-500"
            onClick={() => setCash(!cash)}
          >
            <input
              type="radio"
              name="payment_type"
              className="mr-5 cursor-pointer"
              id="cash"
              required
              value={"cash-onDelivery"}
              {...register("payment_type", { required: true })}
            />
            <label htmlFor="cash" {...textStyles}>
              Cash on Delivery
            </label>
          </div>
        </div>
        {cash ? null : (
          <>
            <div className="space-y-3">
              <label htmlFor="emoney-number" {...textStyles}>
                e-Money Number
              </label>
              <input
                {...inputStyles}
                placeholder="238521993"
                id="emoney-number"
                required
                {...register("emoney_number")}
              />
            </div>

            <div className="space-y-3">
              <label htmlFor="emoney-pin" {...textStyles}>
                e-Money PIN
              </label>
              <input
                {...inputStyles}
                placeholder="6891"
                id="emoney-pin"
                required
                {...register("emoney_pin")}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default PaymentDetails;
