import React from "react";
import CheckoutDetails from "./CheckoutDetails";
import Summary from "./Summary";
import { useForm } from "react-hook-form";

function Checkout() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="space-y-5 bg-gray-100 p-5 lg:flex lg:items-start lg:gap-8 lg:space-y-0">
      <form onSubmit={handleSubmit(onSubmit)}>
        <CheckoutDetails register={register} />
        <Summary />
      </form>
    </div>
  );
}

export default Checkout;
